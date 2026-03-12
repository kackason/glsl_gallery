#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
const vec2 center = vec2(0.5, 0.5);

float randf(float x){
    return sin(10000. * x);
}

float pixel(vec2 uv, float n){
	    return ceil(n*uv.x)/n + ceil(n*uv.y)/n;
}

void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 mouse = u_mouse.xy / u_resolution.xy;
    vec3 color = vec3(1.);
    
    float r = distance(uv, center);
    float r1 = distance(uv, center - vec2(0.007, 0.007)); 
    float r2 = distance(uv, center + vec2(0.007, 0.007));
    
    if(r1 < 0.4 || r2 < 0.4){
        if(r1 < 0.4 && r2 < 0.4){
            color = vec3(0.9);
        }else if(r1 < 0.4){
            color = vec3(0.2);
        }else{
            color = vec3(1.);
        }
    }
    
    for(float i=0.;i<100.;i++){
        float a = randf(i);
        float b = randf(10.*i);
        float c = randf(100.*i);
        float d = abs(a*uv.x + b*uv.y + c) / sqrt(a*a + b*b);
        float e = abs(randf(uv.x + uv.y));
        if(d < 0.001){
            color = vec3(0.);
        }
    }

    if(r1 < 0.25 || r2 < 0.25){
        if(r1 < 0.25 && r2 < 0.25){
            color = vec3(0.9);
        }else if(r1 < 0.25){
            color = vec3(1.);
        }else{
            color = vec3(0.2);
        }
    }
    
    if(r > 0.4){
        color = vec3(0.6);
    }
    
    
    
    gl_FragColor = vec4(color, 1.);
}

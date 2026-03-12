#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

void main(){
	
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec3 color;
    for(float i=0.;i<1.;i+=0.05){
        float a = i;
    	float b = 1.-i;
        float t = a* (uv.x-b) + b* (uv.y-a);
        if(t>0.) color.yz += 0.05;
    }
    
    gl_FragColor = vec4(color, 1.);
}

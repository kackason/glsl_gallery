#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

float randabs(float x){
    return abs(sin(10000. * x));
}
void main(){
	
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec3 color;
    for(float i=0.2;i<1.;i+=0.2){
        if(uv.y < 0.3*sin(2.*randabs(i*i)*uv.x + 2.*randabs(i)*u_time) +0.5){
            color.z += 0.2;
       }
    }
    
    gl_FragColor = vec4(color, 0.5);
}

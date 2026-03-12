#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
const float pi = 3.14;

float rand(float x){
    return sin(10000. * x);
}

float plot(vec2 st, float f){
  return  smoothstep( f-0.001, f, st.y) -
          smoothstep( f, f+0.001, st.y);
}

void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution.xy ;
    vec3 color= vec3(1.);
    float x = uv.x;
    float y = uv.y;
    float t = 100.*mod(100.*x*y,0.01);
    
    color = vec3(t);
    gl_FragColor = vec4(color, 1.);
}

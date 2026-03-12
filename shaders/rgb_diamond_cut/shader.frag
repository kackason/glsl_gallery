#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
const vec2 center = vec2(0.5, 0.5);
const float pi = 3.1415;

float randabs(float x){
    return abs(sin(10000. * x));
}

void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 mouse = u_mouse.xy / u_resolution.xy;
    vec3 color = vec3(1.);
    float ar = 1.73205;
    float br = 1.;
    float r = floor(4.*(ar*uv.x + br*uv.y))*0.1;
    float ag = 1.73205;
    float bg = -1.;
    float g = floor(4.*(ag*uv.x + bg*uv.y + 1.))*0.1;
    float ab = 0.;
    float bb = 2.;
    float b = floor(4.*(ab*uv.x + bb*uv.y))*0.1;
	color = vec3(r, g, b);
    
    gl_FragColor = vec4(color, 1.);
}

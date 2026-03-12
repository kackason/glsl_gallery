#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
const vec2 centor = vec2(.5, .5);

float randabs(float x){
    return abs(sin(10000. * x));
}

float pixel(vec2 uv, float n){
	    return ceil(n*uv.x)/n + ceil(n*uv.y)/n;
}

void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 mouse = u_mouse.xy / u_resolution.xy;
    vec3 color;
    float r,g,b;
	g = pixel(uv, 20.);
    g = 8.*mod(g, 0.2);
    color = vec3(r, g, b);
    gl_FragColor = vec4(color, 0.5);
}

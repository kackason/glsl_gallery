




const vec2 center = vec2(0.5, 0.5);
const float pi = 3.1415;

float randabs(float x){
    return abs(sin(10000. * x));
}


// Converted from Book of Shaders format

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 u_resolution = iResolution.xy;
    float u_time = iTime;
    vec2 u_mouse = iMouse.xy;


    vec2 uv = fragCoord.xy / u_resolution.xy;
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
    
    fragColor = vec4(color, 1.);

}

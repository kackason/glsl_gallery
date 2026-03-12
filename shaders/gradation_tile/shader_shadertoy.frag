




const vec2 centor = vec2(.5, .5);

float randabs(float x){
    return abs(sin(10000. * x));
}

float pixel(vec2 uv, float n){
	    return ceil(n*uv.x)/n + ceil(n*uv.y)/n;
}


// Converted from Book of Shaders format

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 u_resolution = iResolution.xy;
    float u_time = iTime;
    vec2 u_mouse = iMouse.xy;


    vec2 uv = fragCoord.xy / u_resolution.xy;
    vec2 mouse = u_mouse.xy / u_resolution.xy;
    vec3 color;
    float r,g,b;
    vec2 st = vec2(abs(uv.x-centor.x), abs(uv.y - centor.y));
	g = 1.*pixel(st, 20.);
    g += 1.*mod(ceil(10.*st.x)/10. + ceil(10.*st.y)/10., 0.2);
    color = vec3(r, g, b);
    fragColor = vec4(color, 0.5);

}

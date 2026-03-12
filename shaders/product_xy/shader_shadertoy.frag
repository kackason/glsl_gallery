




const float pi = 3.14;

float rand(float x){
    return sin(10000. * x);
}

float plot(vec2 st, float f){
  return  smoothstep( f-0.001, f, st.y) -
          smoothstep( f, f+0.001, st.y);
}


// Converted from Book of Shaders format

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 u_resolution = iResolution.xy;
    float u_time = iTime;
    vec2 u_mouse = iMouse.xy;


    vec2 uv = fragCoord.xy / u_resolution.xy ;
    vec3 color= vec3(1.);
    float x = uv.x;
    float y = uv.y;
    float t = 100.*mod(100.*x*y,0.01);
    
    color = vec3(t);
    fragColor = vec4(color, 1.);

}

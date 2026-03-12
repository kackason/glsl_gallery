




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
    float a = 0.;
    vec2 p,q;
    float t = sin(u_time);
    float u = sin(1.5*u_time + 0.2);
    for(float i=0.;i<5.;i+=0.01){
        p.x = 0.;
        p.y = 0.01*p.y*p.y +0.2*sin(2.*i + u_time) + 0.1*i;
		q.x = 1.;
        q.y = 0.01*q.y*q.y +0.5*sin(3.*i +u_time) + 0.15*i;
		float a = (q.y - p.y)/(q.x - p.x);
        float func = a*(uv.x - q.x) + q.y;
        float pct = plot(uv, func);
		color = (1.0-pct)*color+pct*vec3(0.309,q);
    }
    
    fragColor = vec4(color, 1.);

}

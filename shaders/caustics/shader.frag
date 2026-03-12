// Author:
// Title:

#ifdef GL_ES
precision mediump float;
#endif


uniform float u_time; // time
uniform vec2  u_resolution; // resolution
const int N = 3;
int cnt = 0;
vec2 drop = vec2(0.0, 0.0);

//二色を混ぜる
vec3 mixColor(vec3 a, vec3 b, float x){
    vec3 mix = (1.-x)*a + x*b;
    return mix;
}

//乱数生成
vec2 random2(vec2 v){
    vec2 rand2 = vec2(fract(sin(v)*10000.0));
    return rand2;
}

//セルラーノイズ:最短の点までの距離を返す
float cellularnoise(vec2 st){
    st *= float(N);	//n✕nに分割
    vec2 ist = floor(st);
//    vec2 fst = fract(st);
    vec2 fst = fract(st);

    float dist = 5.0;
    for(int y=-1;y<=1;y++){
        for(int x=-1;x<=1;x++){
            vec2 neighbor = vec2(x,y);
            vec2 p;							//楕円を動く点p
            vec2 ab = random2(ist+neighbor);
            float delta = 6.2831 * ab.x * ab.y;
            p.x = 0.5+(ab.x*cos(u_time+delta) + ab.y*sin(u_time+delta)) / 1.4142;
            p.y = 0.5+(-ab.x*sin(u_time+delta) + ab.y*cos(u_time+delta)) / 1.4142;
			
            vec2 diff = neighbor + p - fst;	//neighbor+pでistからの相対座標
        	dist = min(dist, length(diff));	//最小値とdistを比べる
        }
    }
    return dist * 0.6;
}
                          
void main(void){
	vec2 st = (gl_FragCoord.xy * 2.0 - u_resolution) / u_resolution;
    vec3 blue = vec3(0.011,0.106,0.965);
    vec3 turquoise = vec3(0.133,0.835,0.975);
	vec3 color = vec3(blue + turquoise*cellularnoise(st)); 

    //drop = random2(vec2(floor(u_time), floor(u_time+1.)));	//水滴の位置
   	
    float f = exp(-length(st-drop)) * sin(20.*length(st-drop) - 3.*u_time);
    f = 0.5 * (0.5 + f);
    vec3 destColor = mixColor(color, color+0.3, f);
    gl_FragColor = vec4(destColor, 1.0);

}

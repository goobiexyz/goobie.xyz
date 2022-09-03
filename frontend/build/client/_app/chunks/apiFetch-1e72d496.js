const i="https://api.graciebell.art/api/";async function s(t,...a){let e=i+t+"?"+a.join("&");return(await fetch(e).then(r=>r.json())).data}export{s as a};

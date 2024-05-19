const luckA = [
    {
      announcement: "완전 짱 최고일 것이다.",
      luck: "대길(大吉)",
    },
    {
      announcement: "좋다~!! 행복한 날.",
      luck: "길(吉)",
    },
    {
      announcement:"절반 정도의 길~!! 노력하면 좋을듯?",
      luck: "중길(中吉)",
    },
    {
      announcement: "애매한데 그래도 길은 길~ 좋은날!! 소확행.",
      luck: "소길(小吉)",
    },
    {
      announcement: "그래도 길은 길이니까 한잔해.",
      luck: "말길(末吉)",
    },
    {
      announcement: "머리 위를 항상 조심하기~!! 운수 나쁜 날.",
      luck: "흉(凶)",
    },
    {
      announcement: "설렁탕을 먹을 일만 없었으면 좋겠다. 안되겠다 새로고침 해서 운수를 바꾸자~!!",
      luck: "대흉(大凶)",
    }
  ];
  
  const announcement = document.querySelector("#luck span:first-child");
  const luck = document.querySelector("#luck span:last-child");
  const todaysLuck = luckA[Math.floor(Math.random() * luckA.length)];
  
  announcement.innerText = todaysLuck.announcement;
  luck.innerText = todaysLuck.luck;
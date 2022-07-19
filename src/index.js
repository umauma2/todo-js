import "./styles.css";

const onClickAdd = () => {
  const inputTextElement = document.getElementById("add-text");
  const inputText = inputTextElement.value;
  inputTextElement.value = "";
  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromList = (element, target) => {
  document.getElementById(element).removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタンタグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromList("incomplete-list", addTarget);

    // TODO内容のテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグの生成
    const completeLi = document.createElement("li");
    completeLi.innerText = text;

    // buttonタグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻るボタンの親タグ(div)を未完了リストから削除
      deleteFromList("complete-list", backButton.parentNode);
      const completeText = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(completeText);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(completeLi);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタンタグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromList("incomplete-list", deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

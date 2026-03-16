日本語の翻訳:

# popup-confirm
English version: [README.md](README.md)

Webアプリケーション向けの簡単なポップアップ確認ダイアログコンポーネントです。

## デモ
[インタラクティブデモ](https://code4fukui.github.io/popup-confirm/)

## 機能
- メッセージとボタンのテキストをカスタマイズ可能
- ボタンの順序を OK/Cancel または Cancel/OK で設定可能
- キーボードサポート (Enter、Escape、Tab、矢印キー)
- ボタンにフォーカスを合わせる
- 背景クリックで閉じる

## 使用方法
`popup-confirm`コンポーネントを使用するには、それをインポートし、`show()`メソッドを呼び出します:

```javascript
import { PopupConfirm } from './popup-confirm.js';

const result = await PopupConfirm.show('本当によろしいですか?');
console.log(result); // OKの場合はtrue、Cancelの場合はfalse
```

オプションを渡して、ダイアログをカスタマイズすることもできます:

```javascript
const result = await PopupConfirm.show('本当によろしいですか?', { opposite: true, focusCancel: true });
```

## ライセンス
このプロジェクトは [MIT License](LICENSE) のもとで公開されています。

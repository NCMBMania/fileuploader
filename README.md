# NCMBへのファイルアップロードを行うjQueryプラグイン

![](./demo.gif)

## 読み込み

JavaScript、CSSをそれぞれ読み込んでください。CDNはrawgitによるものです。

```html
<script src="//cdn.rawgit.com/NCMBMania/fileuploader/master/ncmb_fileuploader.js"></script>
<link rel="stylesheet" href="//cdn.rawgit.com/NCMBMania/fileuploader/master/ncmb_fileuploader.css">
```

## 使い方

必要な引数はニフティクラウド mobile backendのアプリケーションキー、クライアントキーそして管理画面のURLから取得するアプリケーションIDとなっています。

```javascript
$(() => {
    const applicationKey = 'YOUR_APPLICATION_KEY';
    const clientKey = 'YOUR_CLIENT_KEY';
    const applicationId = 'YOUR_APPLICATION_ID';
	$('#drag-drop-area').fileUpload({
        applicationKey: applicationKey,
        clientKey: clientKey,
        applicationId: applicationId
    }, (urls) => {
        // ファイルストアへアクセスするURLが返ってきます
  	    for (let url of urls) {
    	    $('.results').append(`<img src="${url}" width="300px" /><br />`);
        }
    }, (err) => {
    });
});
```

HTMLはドラッグ&ドロップを受け付ける枠を作ります。

```html
<div id="drag-drop-area">
  <p class="drag-drop-info">ここにファイルをドロップ</p>
</div>
```

## 依存ライブラリ

- jQuery

## デモ

[JSFiddle](https://jsfiddle.net/1Lwpf0jt/)

## License

MIT License

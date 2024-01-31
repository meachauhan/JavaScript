const result=document.querySelector('#result')
window.addEventListener('keydown', function (e){

    result.innerHTML=`
    <table >
    <tr>
        <th>Key Pressed</th>
        <th>Key code</th>
        <th>Code</th>
     </tr>
     <tr>
        <td>${e.key ===' '? 'Space':e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
     </tr>
    </table>
    `
})
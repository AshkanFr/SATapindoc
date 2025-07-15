---
title: گرفتن لیست استان‌ها و شهرها  
index: true
sidebarDepth: 2
---

<div class="container">

## گرفتن لیست استان‌ها و شهرها
توضیحات...

<div  class="middle">

<div class="right-section">

## گرفتن لیست‌ استان‌ها و شهر‌ها


توضیحات راجع به توکن API 
 

<br/>
<br/>
<br/>


<table>
  <thead>
    <tr>
      <th>type</th>
      <th>description</th>
      <th>allow blank</th>
      <th>allow null</th>
      <th>field</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>int</td>
      <td>کد استان</td>
      <td>false</td>
      <td>false</td>
      <td>code</td>
    </tr>
    <tr>
      <td>str</td>
      <td>نام استان</td>
      <td>false</td>
      <td>false</td>
      <td>title</td>
    </tr>
    <tr>
      <td>list</td>
      <td>لیست شهرها</td>
      <td>false</td>
      <td>false</td>
      <td>cities</td>
    </tr>
  </tbody>
</table>

</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/state/tree</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال
```json
{}
```

##### نمونه جیسون خروجی 
```json
{
    "returns": {
        "status": 200,
        "message": "عملیات با موفقیت انجام شد."
    },
    "entries": [
        {
            "code": 1,
            "title": "تهران",
            "cities": [
                {
                    "code": 1,
                    "title": "تهران"
                },
                {
                    "code": 331,
                    "title": "اسلام شهر"
                },
                {
                    "code": 1011,
                    "title": "منطقه 11 پستي تهران"
                },
                {
                    "code": 1013,
                    "title": "منطقه 13 پستي تهران"
                },
                {
                    "code": 1014,
                    "title": "منطقه 14 پستي تهران"
                },
                {
                    "code": 1015,
                    "title": "منطقه 15 پستي تهران"
                },
                {
                    "code": 1016,
                    "title": "منطقه 16 پستي تهران"
                },
                {
                    "code": 1017,
                    "title": "منطقه 17 پستي تهران\r\n"
                }
            ]
        }
    ]
}
```
<!-- closing left -->
</div> 

</div>

</div>












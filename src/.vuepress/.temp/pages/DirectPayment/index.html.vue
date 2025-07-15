<template><div><div class="container">
<h2 id="پرداخت-مستقیم" tabindex="-1"><a class="header-anchor" href="#پرداخت-مستقیم"><span>پرداخت مستقیم</span></a></h2>
<p>با استفاده از این سرویس، خریدار پرداخت‌های آنلاین خود را بدون نیاز به ورود به درگاه پرداخت اینترنتی و وارد کردن اطلاعات
کارت بانکی انجام میدهد.</p>
<p>ابتدا جهت فعالسازی این سرویس برای درگاه خود تیکت (opens new window)ارسال نمایید.</p>
<div  class="middle">
<div class="right-section">
<h2 id="ارسال-اطلاعات" tabindex="-1"><a class="header-anchor" href="#ارسال-اطلاعات"><span>ارسال اطلاعات</span></a></h2>
<p>در مرحله اول پذیرندگان باید پارامترهای موجود در جدول زیر را ، با توجه به نوع داده‌ها و نام فیلد، با متد POST به آدرس
مشخص شده ارسال نمایند.</p>
<table>
  <thead>
    <tr>
      <th>نام</th>
      <th>نوع</th>
      <th>الزام</th>
      <th>توضیحات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>merchant_id</td>
      <td>String</td>
      <td>بله</td>
      <td>كد 36 كاراكتری اختصاصی درگاه پذیرنده</td>
    </tr>
    <tr>
      <td>mobile</td>
      <td>String</td>
      <td>بله</td>
      <td>شماره تماس خریدار</td>
    </tr>
    <tr>
      <td>ssn</td>
      <td>String</td>
      <td>خیر</td>
      <td>کد ملی خریدار</td>
    </tr>
    <tr>
      <td>expire_at</td>
      <td>String</td>
      <td>بله</td>
      <td>تاریخ انقضای قرارداد پرداخت مستقیم (مدت قرارداد حداقل باید ۳۰ روز باشد)تاریخ انقضای قرارداد پرداخت مستقیم (مدت قرارداد حداقل باید ۳۰ روز باشد) تاریخ انقضای قرارداد پرداخت مستقیم (مدت قرارداد حداقل باید ۳۰ روز باشد) تاریخ انقضای قرارداد پرداخت مستقیم (مدت قرارداد حداقل باید ۳۰ روز باشد)</td>
    </tr>
    <tr>
      <td>max_daily_count</td>
      <td>String</td>
      <td>بله</td>
      <td>حداکثر تعداد تراکنش روزانه</td>
    </tr>
    <tr>
      <td>max_monthly_count</td>
      <td>String</td>
      <td>بله</td>
      <td>حداکثر تعداد تراکنش ماهانه</td>
    </tr>
    <tr>
      <td>max_amount</td>
      <td>String</td>
      <td>بله</td>
      <td>حداکثر مبلغ تراکنش به ریال</td>
    </tr>
    <tr>
      <td>callback_url</td>
      <td>String</td>
      <td>بله</td>
      <td>صفحه بازگشت پس از بستن قرارداد</td>
    </tr>
  </tbody>
</table>
<blockquote>
<p>⚠️ فیلدهای shop_id, receiver_mobile, و cod_amount ضروری هستند.</p>
</blockquote>
<p>پاسخ برگشتی توسط این درخواست به شرح زیر است :</p>
<div class="table">
<table>
  <thead>
    <tr>
      <th>نام</th>
      <th>نوع</th>
      <th>توضیحات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>payman_authority</td>
      <td>String</td>
      <td>مقدار آتوریتی پیمان که میبایست ذخیره کنید</td>
    </tr>
    <tr>
      <td>code</td>
      <td>Integer</td>
      <td>عددی كه نشان دهنده موفق بودن یا نبودن پرداخت است.</td>
    </tr>
    <tr>
      <td>message</td>
      <td>String</td>
      <td>پیام موفقیت آمیز بودن درخواست</td>
    </tr>
    <tr>
      <td>errors</td>
      <td>Array</td>
      <td>در صورت وجود خطا کد خطا و پیام آن را برمیگرداند</td>
    </tr>
  </tbody>
</table>
</div>
</div>
<div class="left-section">
<div class="token">
<span style="text-align: left">https://api.zarinpal.com/pg/v4/payman/request.json</span>
 <span class="badge post">POST</span>
</div>
<h5 id="نمونه-درخواست" tabindex="-1"><a class="header-anchor" href="#نمونه-درخواست"><span>نمونه درخواست</span></a></h5>
<Tabs :data='[{"id":"PHP"},{"id":"JSON"}]' :active="0">
<template #title0="{ value, isActive }">PHP</template>
<template #title1="{ value, isActive }">JSON</template>
<template #tab0="{ value, isActive }">
<div class="language-php line-numbers-mode" data-highlighter="shiki" data-ext="php" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-php"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$curl</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> curl_init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">curl_setopt_array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$curl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">CURLOPT_URL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'https://api.zarinpal.com/pg/v4/payman/request.json'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">CURLOPT_RETURNTRANSFER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">CURLOPT_ENCODING</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ''</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">CURLOPT_MAXREDIRS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">CURLOPT_TIMEOUT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">CURLOPT_FOLLOWLOCATION</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">CURLOPT_HTTP_VERSION</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> CURL_HTTP_VERSION_1_1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">CURLOPT_CUSTOMREQUEST</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'POST'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">CURLOPT_POSTFIELDS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"merchant_id": "عرفان ناشیرین",</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"mobile": "09123456789",</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"ssn": "0480123456",</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"expire_at": "2025-04-08 00:00:00",</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"max_daily_count": "100",</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"max_monthly_count": "1000",</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"max_amount": "50000",</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"callback_url": "https://your-site.com/direct"</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">}'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">CURLOPT_HTTPHEADER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'Content-Type: application/json'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'Accept: application/json'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$response</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> curl_exec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$curl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">curl_close</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$curl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $response</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "payman_authority"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"payman_6moa"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Success"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "errors"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: []</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h5 id="نمونه-پاسخ" tabindex="-1"><a class="header-anchor" href="#نمونه-پاسخ"><span>نمونه پاسخ</span></a></h5>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "payman_authority"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"payman_6moa"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Success"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "errors"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: []</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">نکته</p>
<div class="info-box">
تمامی داده‌های برگشتی از زرین‌پال به صورت json می باشد.
</div>
</div>
</div>
</div>
<div  class="middle">
<div class="right-section">
<h2 id="دریافت-لیست-بانک‌ها" tabindex="-1"><a class="header-anchor" href="#دریافت-لیست-بانک‌ها"><span>دریافت لیست بانک‌ها</span></a></h2>
<p>برای بستن قرار داد با بانک میبایست bank_code بانکی که میخواهید خریدار با آن قرار داد ببندد را داشته باشید</p>
<p>برای دریافت bank_code یک درخواست GET به آدرس مشخص شده ارسال کنید</p>
<p>پاسخ برگشتی توسط این درخواست به شرح زیر است :</p>
<table>
  <thead>
    <tr>
      <th>نام</th>
      <th>نوع</th>
      <th>توضیحات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>banks</td>
      <td>Array</td>
      <td>لیست بانک های موجود</td>
    </tr>
    <tr>
      <td>name</td>
      <td>String</td>
      <td>نام بانک</td>
    </tr>
    <tr>
      <td>slug</td>
      <td>String</td>
      <td>نام اسلاگ بانک</td>
    </tr>
    <tr>
      <td>bank_code</td>
      <td>String</td>
      <td>مقدار bank_code که جهت بستن قرارداد با بانک مورد نظر نیاز دارید</td>
    </tr>
    <tr>
      <td>max_daily_amount</td>
      <td>Integer</td>
      <td>حداکثر مبلغ روزانه که بانک قبول به پرداخت میکند</td>
    </tr>
    <tr>
      <td>max_daily_count</td>
      <td>Integer یا null</td>
      <td>حداکثر تعداد تراکنش روزانه ای که بانک قبول به پرداخت میکند.<br>در صورت null بودن : محدودیتی ندارد</td>
    </tr>
    <tr>
      <td>code</td>
      <td>Integer</td>
      <td>عددی كه نشان دهنده موفق بودن یا موفق نبودن پرداخت است.</td>
    </tr>
    <tr>
      <td>message</td>
      <td>String</td>
      <td>پیام موفقیت آمیز بودن درخواست</td>
    </tr>
    <tr>
      <td>errors</td>
      <td>Array</td>
      <td>در صورت وجود خطا کد خطا و پیام آن را برمیگرداند</td>
    </tr>
  </tbody>
</table>
</div>
<div class="left-section">
<div class="token">
<span style="text-align: left">https://api.zarinpal.com/pg/v4/payman/banksList.json</span>
 <span class="badge get">GET</span>
</div>
<h5 id="نمونه-پاسخ-لیست-بانک-ها" tabindex="-1"><a class="header-anchor" href="#نمونه-پاسخ-لیست-بانک-ها"><span>نمونه پاسخ لیست بانک ها</span></a></h5>
<div>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "banks"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"بانک سامان"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "slug"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Saman"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "bank_code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"SABCIR"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "max_daily_amount"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100000000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "max_daily_count"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">25</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"بانک سينا"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "slug"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Sina"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "bank_code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"SINAIR"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "max_daily_amount"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100000000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "max_daily_count"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Success"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "errors"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: []</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
</div>
</div>
<div  class="middle">
<div class="right-section">
<h2 id="صفحه-بستن-قرارداد" tabindex="-1"><a class="header-anchor" href="#صفحه-بستن-قرارداد"><span>صفحه بستن قرارداد</span></a></h2>
<p>پس از دریافت <code v-pre>authority</code> و <code v-pre>bank_code</code> مقادیر را در لینک مشخص شده قرار دهید و کاربر را به صفحه بانک هدایت کنید</p>
</div>
<div class="left-section">
<div class="token">
<span>https://www.zarinpal.com/pg/StartPayman/{payman_authority}/{bank_code}</span>
 <span class="badge get">GET</span>
</div>
</div>
</div>
<div  class="middle">
<div class="right-section">
<h2 id="بازگشت-به-وب‌سایت-پذیرنده" tabindex="-1"><a class="header-anchor" href="#بازگشت-به-وب‌سایت-پذیرنده"><span>بازگشت به وب‌سایت پذیرنده</span></a></h2>
<p>بعد از پایان عملیات در سمت زرین‌پال، خریدار از صفحه بستن قرارداد باز می‌گردد.</p>
<p>در این مرحله با توجه به نتیجه قرارداد و وضعیت آن، بانک خریدار را به آدرس درخواستی پذیرنده که در ارسال اطلاعات با پارامتر
<code v-pre>callback_url</code> مشخص شده است، هدایت می‌کند.</p>
<div class="hint-container info">
<p class="hint-container-title">نکته</p>
<div class="info-box">
توجه داشته باشید كه یك Status به صورت QueryString به سایت پذیرنده ارسال می‌شود كه دارای دو مقدار ثابت ”OK“ و ”NOK“ است؛ در صورتی كه این مقدار برابر ”NOK“ باشد، به این معنا است كه بست قرارداد ناموفق بوده یا توسط خریدار لغو شده است؛ درنتیجه متد دریافت signature که در زیر آمده است باید در صورتی استفاده شود كه در QueryString مقدار Status برابر با ”OK“ باشد..
</div>
</div>
</div>
<div class="left-section">
<div>
<p>نمونه موفق :</p>
<div class="language-ruby line-numbers-mode" data-highlighter="shiki" data-ext="ruby" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-ruby"><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">https</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75">/your-site.ir/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">?</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">payman_authority</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">payman_6moa</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x26;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">status</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B">OK</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>نمونه ناموفق :</p>
<div class="language-ruby line-numbers-mode" data-highlighter="shiki" data-ext="ruby" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-ruby"><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#56B6C2">https</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75">/your-site.ir/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">?</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">payman_authority</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">payman_6moa</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x26;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">status</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B">NOK</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div>
</div>
</div>
<div  class="middle">
<div class="right-section">
<h2 id="دریافت-signature" tabindex="-1"><a class="header-anchor" href="#دریافت-signature"><span>دریافت Signature</span></a></h2>
<p>پس از بستن قرارداد موفق میبایست با استفاده از این متد signature را دریافت نمایید</p>
<p>برای دریافت signature میبایست یک درخواست با متد POST به آدرس مشخص شده حاوی مقادیر زیر ارسال کنید :</p>
<table>
  <thead>
    <tr>
      <th>نام</th>
      <th>نوع</th>
      <th>الزام</th>
      <th>توضیحات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>merchant_id</td>
      <td>String</td>
      <td>بله</td>
      <td>كد 36 كاراكتری اختصاصی درگاه پذیرنده</td>
    </tr>
    <tr>
      <td>payman_authority</td>
      <td>String</td>
      <td>بله</td>
      <td>مقدار آتوریتی پیمان که در متد ارسال اطلاعات دریافت کردید</td>
    </tr>
  </tbody>
</table>
<p>پاسخ برگشتی توسط این درخواست به شرح زیر است :</p>
<table>
  <thead>
    <tr>
      <th>نام</th>
      <th>نوع</th>
      <th>توضیحات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>signature</td>
      <td>String</td>
      <td>مقدار signature حاوی ۲۰۰ کاراکتر که میبایست ذخیره کنید</td>
    </tr>
    <tr>
      <td>code</td>
      <td>Integer</td>
      <td>عددی كه نشان دهنده موفق بودن یا موفق نبودن پرداخت است.</td>
    </tr>
    <tr>
      <td>message</td>
      <td>String</td>
      <td>پیام موفقیت آمیز بودن درخواست</td>
    </tr>
    <tr>
      <td>errors</td>
      <td>Array</td>
      <td>در صورت وجود خطا کد خطا و پیام آن را برمیگرداند</td>
    </tr>
  </tbody>
</table>
<div class="hint-container warning">
<p class="hint-container-title">مهم</p>
<div class="warning-box">
<p>اطلاعات قرارداد اعم از : <code v-pre>payman_authority</code> و <code v-pre>signature</code> باید به صورت امن توسط پذیرنده نگهداری شود با استفاده از این
اطلاعات، پرداخت به صورت مسقیم انجام می شود.</p>
</div>
</div>
</div>
<div class="left-section">
<div class="token">
<span style="text-align: left">https://api.zarinpal.com/pg/v4/payman/verify.json</span>
 <span class="badge post">POST</span>
</div>
<h5 id="نمونه-درخواست-1" tabindex="-1"><a class="header-anchor" href="#نمونه-درخواست-1"><span>نمونه درخواست</span></a></h5>
<div>
<div class="language-php line-numbers-mode" data-highlighter="shiki" data-ext="php" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-php"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">?</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$curl</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> curl_init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">curl_setopt_array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$curl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_URL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'https://api.zarinpal.com/pg/v4/payman/verify.json'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_RETURNTRANSFER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_ENCODING</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ''</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_MAXREDIRS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_TIMEOUT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_FOLLOWLOCATION</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_HTTP_VERSION</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> CURL_HTTP_VERSION_1_1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_CUSTOMREQUEST</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'POST'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_POSTFIELDS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "merchant_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "payman_authority": "payman_6moa"</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">}'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_HTTPHEADER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    'Content-Type: application/json'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    'Accept: application/json'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$response</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> curl_exec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$curl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">curl_close</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$curl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $response</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="نمونه-پاسخ-1" tabindex="-1"><a class="header-anchor" href="#نمونه-پاسخ-1"><span>نمونه پاسخ</span></a></h5>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "payman_authority"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"payman_6moa"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Success"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "errors"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: []</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
</div>
</div>
<div  class="middle">
<div class="right-section">
<h2 id="انجام-تراکنش-مستقیم" tabindex="-1"><a class="header-anchor" href="#انجام-تراکنش-مستقیم"><span>انجام تراکنش مستقیم</span></a></h2>
<p>حال جهت انجام یک تراکنش مستقیم میبایست از طریق قسمت درخواست پرداخت یک پرداخت ایجاد کرده و Authority دریافت کنید.</p>
<p>سپس از طریق متد Checkout که در زیر آمده است برای پرداخت تراکنش استفاده میکنید.</p>
<p>برای پرداخت تراکنش ایجاد شده میبایست یک درخواست با متد POST به آدرس مشخص شده ارسال نمایید که حاوی مقادیر زیر است :</p>
<table>
  <thead>
    <tr>
      <th>نام</th>
      <th>نوع</th>
      <th>الزام</th>
      <th>توضیحات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>merchant_id</td>
      <td>String</td>
      <td>بله</td>
      <td>كد 36 كاراكتری اختصاصی درگاه پذیرنده</td>
    </tr>
    <tr>
      <td>authority</td>
      <td>String</td>
      <td>بله</td>
      <td>مقدار آتوریتی تراکنشی که از درخواست پرداخت دریافت کردید.</td>
    </tr>
    <tr>
      <td>signature</td>
      <td>String</td>
      <td>بله</td>
      <td>مقدار signature که از متد دریافت Signature دریافت کردید.</td>
    </tr>
  </tbody>
</table>
<p>پاسخ برگشتی توسط این درخواست به شرح زیر است :</p>
<table>
  <thead>
    <tr>
      <th>نام</th>
      <th>نوع</th>
      <th>توضیحات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>refrence_id</td>
      <td>Integer</td>
      <td>در صورتی كه پرداخت موفق باشد، شماره تراكنش پرداخت انجام شده را بر می‌گرداند.</td>
    </tr>
    <tr>
      <td>amount</td>
      <td>Integer</td>
      <td>مبلغ تراکنش ( به ریال )</td>
    </tr>
    <tr>
      <td>code</td>
      <td>Integer</td>
      <td>عددی كه نشان دهنده موفق بودن یا موفق نبودن پرداخت است.</td>
    </tr>
    <tr>
      <td>message</td>
      <td>String</td>
      <td>پیام موفقیت آمیز بودن درخواست</td>
    </tr>
    <tr>
      <td>errors</td>
      <td>Array</td>
      <td>در صورت وجود خطا کد خطا و پیام آن را برمیگرداند</td>
    </tr>
  </tbody>
</table>
</div>
<div class="left-section">
<div class="token">
<span style="text-align: left">https://api.zarinpal.com/pg/v4/payman/checkout.json</span>
 <span class="badge post">POST</span>
</div>
<h5 id="نمونه-درخواست-2" tabindex="-1"><a class="header-anchor" href="#نمونه-درخواست-2"><span>نمونه درخواست</span></a></h5>
<div>
<div class="language-php line-numbers-mode" data-highlighter="shiki" data-ext="php" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-php"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">?</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$curl</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> curl_init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">curl_setopt_array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$curl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_URL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'https://api.zarinpal.com/pg/v4/payman/verify.json'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_RETURNTRANSFER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_ENCODING</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ''</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_MAXREDIRS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_TIMEOUT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_FOLLOWLOCATION</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_HTTP_VERSION</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> CURL_HTTP_VERSION_1_1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_CUSTOMREQUEST</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'POST'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_POSTFIELDS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "merchant_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "authority": "A0000000000000000000000000002vm5y3lo",</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "signature": "eyJpdiI6InpoUHZoT0hPZjdNNj...",</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">}'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_HTTPHEADER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    'Content-Type: application/json'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    'Accept: application/json'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$response</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> curl_exec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$curl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">curl_close</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$curl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $response</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="نمونه-پاسخ-2" tabindex="-1"><a class="header-anchor" href="#نمونه-پاسخ-2"><span>نمونه پاسخ</span></a></h5>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "payman_authority"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"payman_6moa"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Success"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "errors"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: []</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
</div>
</div>
<div  class="middle">
<div class="right-section">
<h2 id="لغو-قرارداد-پرداخت-مستقیم" tabindex="-1"><a class="header-anchor" href="#لغو-قرارداد-پرداخت-مستقیم"><span>لغو قرارداد پرداخت مستقیم</span></a></h2>
<p>برای لغو یک قرارداد پرداخت مستقیم میبایست یک درخواست با متد POST به آدرس مشخص شده حاوی مقادیر زیر ارسال کنید :</p>
<table>
  <thead>
    <tr>
      <th>نام</th>
      <th>نوع</th>
      <th>الزام</th>
      <th>توضیحات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>merchant_id</td>
      <td>String</td>
      <td>بله</td>
      <td>كد 36 كاراكتری اختصاصی درگاه پذیرنده</td>
    </tr>
    <tr>
      <td>signature</td>
      <td>String</td>
      <td>بله</td>
      <td>مقدار signature که از متد دریافت Signature دریافت کردید.</td>
    </tr>
  </tbody>
</table>
<p>پاسخ برگشتی توسط این درخواست به شرح زیر است :</p>
<table>
  <thead>
    <tr>
      <th>نام</th>
      <th>نوع</th>
      <th>توضیحات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>code</td>
      <td>Integer</td>
      <td>عددی كه نشان دهنده موفق بودن یا موفق نبودن لغو پرداخت مستقیم است.</td>
    </tr>
    <tr>
      <td>message</td>
      <td>String</td>
      <td>پیام موفقیت آمیز بودن درخواست</td>
    </tr>
    <tr>
      <td>errors</td>
      <td>Array</td>
      <td>در صورت وجود خطا کد خطا و پیام آن را برمیگرداند</td>
    </tr>
  </tbody>
</table>
<div class="hint-container warning">
<p class="hint-container-title">مهم</p>
<div class="warning-box">
<p>پذیرنده حتما میبایست با این API یک بخشی برای خریداران خود ایجاد کند تا کاربرانی که پرداخت مستقیم ثبت کرده اند در هر زمان
دلخواهی که تمایل به لغو پرداخت مستقیم خود داشتند سرویس پرداخت مستقیم را برای قرارداد خود غیرفعال کند در صورت عدم پیاده
سازی این بخش، زرین پال میتواند کل سرویس را غیرفعال کند</p>
</div>
</div>
</div>
<div class="left-section">
<div class="token">
<span style="text-align: left">https://api.zarinpal.com/pg/v4/payman/cancelContract.json</span>
 <span class="badge post">POST</span>
</div>
<h5 id="نمونه-درخواست-3" tabindex="-1"><a class="header-anchor" href="#نمونه-درخواست-3"><span>نمونه درخواست</span></a></h5>
<div>
<div class="language-php line-numbers-mode" data-highlighter="shiki" data-ext="php" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-php"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">?</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$curl</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> curl_init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">curl_setopt_array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$curl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_URL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'https://api.zarinpal.com/pg/v4/payman/verify.json'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_RETURNTRANSFER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_ENCODING</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ''</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_MAXREDIRS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_TIMEOUT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_FOLLOWLOCATION</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_HTTP_VERSION</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> CURL_HTTP_VERSION_1_1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_CUSTOMREQUEST</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'POST'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_POSTFIELDS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "merchant_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "authority": "A0000000000000000000000000002vm5y3lo",</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "signature": "eyJpdiI6InpoUHZoT0hPZjdNNj...",</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">}'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">  CURLOPT_HTTPHEADER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =></span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    'Content-Type: application/json'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    'Accept: application/json'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$response</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> curl_exec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$curl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">curl_close</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$curl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $response</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="نمونه-پاسخ-3" tabindex="-1"><a class="header-anchor" href="#نمونه-پاسخ-3"><span>نمونه پاسخ</span></a></h5>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Success"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "errors"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: []</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
</div>
</div>
<div  class="middle">
<div class="right-section">
<h4 id="اعتبارسنجی-تراکنش" tabindex="-1"><a class="header-anchor" href="#اعتبارسنجی-تراکنش"><span>اعتبارسنجی تراکنش</span></a></h4>
<p>برای وریفای کردن تراکنش مورد نظر میتوانید از متد اعتبارسنجی در مستندات بخش <a href="Connections">راهنمای اتصالات</a> استفاده کنید</p>
</div>
</div>
</div>
</div></template>



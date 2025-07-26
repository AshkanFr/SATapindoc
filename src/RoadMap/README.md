<style>

    body {
  background-color: #1e293b; /* رنگ پس‌زمینه تیره */
  font-family: "BYekan", sans-serif;
  direction: rtl;
  margin: 0;
  padding: 0;
  color: white;
}

.roadmap {
  position: relative;
  padding: 6rem 0;
  max-width: 1400px;
  margin: auto;
}

.road {
  height: 10px;
  background: #6b7280;
  border-radius: 4px;
  width: 100%;
  position: relative;
  z-index: 1;
}

.truck {
  position: absolute;
  top: -60px;
  left: 0;
  width: 80px;
  height: 50px;
  background-image: url('/assets/images/truck-yellow.png');
  background-size: contain;
  background-repeat: no-repeat;
  animation: move-truck 12s linear infinite;
}

@keyframes move-truck {
  0% { left: 0%; }
  100% { left: 90%; }
}

.station {
  position: absolute;
  top: -130px;
  width: 80px;
  text-align: center;
  z-index: 2;
}

.circle {
  width: 50px;
  height: 50px;
  background-color: #facc15; /* زرد مینیمال */
  color: black;
  border: 4px solid #000;
  border-radius: 50%;
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pole {
  width: 4px;
  height: 90px;
  background-color: #9ca3af;
  margin: 0 auto;
  position: relative;
  top: -4px;
}

.station-text {
  margin-top: 6px;
  font-size: 14px;
}

.station-text a {
  color: white;
  text-decoration: none;
}

 </style>




<div class="roadmap">
  <div class="truck"></div>
  <div class="road"></div>

  <!-- ایستگاه ۱ -->
  <div class="station" style="left: 8%;">
    <div class="circle">۱</div>
    <div class="pole"></div>
    <div class="station-text"><a href="/Prerequisites/">پیش‌نیازها</a></div>
  </div>

  <!-- ایستگاه ۲ -->
  <div class="station" style="left: 28%;">
    <div class="circle">۲</div>
    <div class="pole"></div>
    <div class="station-text"><a href="/Pricing/">استعلام قیمت</a></div>
  </div>

  <!-- ایستگاه ۳ -->
  <div class="station" style="left: 48%;">
    <div class="circle">۳</div>
    <div class="pole"></div>
    <div class="station-text"><a href="/Orders/CreateOrder/">ثبت سفارش</a></div>
  </div>

  <!-- ایستگاه ۴ -->
  <div class="station" style="left: 68%;">
    <div class="circle">۴</div>
    <div class="pole"></div>
    <div class="station-text"><a href="/Orders/OrderLable/">لیبل و فاکتور</a></div>
  </div>

  <!-- ایستگاه ۵ -->
  <div class="station" style="left: 88%;">
    <div class="circle">۵</div>
    <div class="pole"></div>
    <div class="station-text"><a href="/Orders/OrderStatus/">مدیریت سفارشات</a></div>
  </div>
</div>




<!-- ---
title: نقشه راه
index: true
---

<ClientOnly>

<div class="roadmap-container">

  <div class="truck">
    <img src="/assets/images/TapinLogo.png" alt="کامیون پستی تاپین" />
  </div>

  <div class="stations">

<div class="station">
      <h3>۱. پیش‌نیازها</h3>
      <ul>
        <li><a href="/Tokens/#getToken">دریافت توکن</a></li>
        <li><a href="/ProvinceAndCitiesList/#getProvinceList">لیست استان‌ها</a></li>
        <li><a href="/ProvinceAndCitiesList/#getCitiesList">لیست شهرها</a></li>
        <li><a href="/Orders/CreateOrder/#kioskList">کیوسک‌های جابار</a></li>
        <li><a href="/Orders/CreateOrder/#packagesList">بسته‌های پستی</a></li>
        <li><a href="/Orders/OrderGuide/#pay_type">نوع پرداخت</a></li>
        <li><a href="/Orders/OrderGuide/#order_type">نوع سفارش</a></li>
        <li><a href="/Orders/OrderGuide/#register_type">نوع ثبت سفارش</a></li>
        <li><a href="/Orders/OrderGuide/#content_type">نوع محتوای سفارش</a></li>
      </ul>
    </div>

<div class="station">
      <h3>۲. استعلام قیمت</h3>
      <ul>
        <li><a href="/PriceCheck/">صفحه استعلام قیمت</a></li>
      </ul>
    </div>

<div class="station">
      <h3>۳. ثبت سفارش</h3>
      <ul>
        <li><a href="/Orders/CreateOrder/">مستندات ثبت سفارش</a></li>
      </ul>
    </div>

<div class="station">
      <h3>۴. لیبل و فاکتور</h3>
      <ul>
        <li><a href="/Orders/OrderLable/#orderLable">لیبل سفارشات</a></li>
        <li><a href="/Orders/OrderLable/#lableWithDate">لیبل با فیلتر تاریخ</a></li>
      </ul>
    </div>

<div class="station">
      <h3>۵. مدیریت سفارش</h3>
      <ul>
        <li><a href="/Orders/OrderDetail/#orderList">لیست سفارشات</a></li>
        <li><a href="/Orders/OrderDetail/#orderDetails">جزییات سفارش</a></li>
        <li><a href="/Orders/OrderStatus/#changeOrderStatus">تغییر وضعیت</a></li>
        <li><a href="/Orders/OrderStatus/#statusAndBarcodeGroupOrder">بارکدهای گروهی</a></li>
      </ul>
    </div>

  </div>
</div>

</ClientOnly>


 -->







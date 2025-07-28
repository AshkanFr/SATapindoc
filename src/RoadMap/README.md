<style>
  .roadmap-container {
    position: relative;
    width: 100%;
    height: 800px;
    background-color: transparent;
  }

  .roadmap-image {
    position: absolute;
    top: 270px;
    left: 40%;
    transform: translateX(-50%);
    width: 1000px;
  }


  .moving-truck {
    position: absolute;
    top: 330px; 
    left: 0;
    width: 100px;
    height: 100px;
    background-image: url('/assets/images/mytruck.svg'); 
    background-size: contain;
    background-repeat: no-repeat;
    animation: truckMove 10s linear infinite;
    z-index: 10;
    
  }

  @keyframes truckMove {
    0% { left: -10%; }
    100% { left: 80%; }
  }

  .stage-labels {
    position: absolute;
    top: 425px;
    left: 37%;
    transform: translateX(-50%);
    display: flex;
    gap: 3rem;
    color: white;
    font-family: 'BYekan', sans-serif;
    font-weight: bold;
    font-size: 20px;
    white-space: nowrap;
    justify-content: center;
    direction: ltr;
  }

  .stage {
    position: relative;
    text-align: center;
    cursor: pointer;
    min-width: 120px;
  }

  .stage-popup {
    display: none;
    position: absolute;
    top: 30px;
    right: 50%;
    transform: translateX(50%);
    background: #fff;
    color: #000;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 0.8rem 1rem;
    font-size: 13px;
    z-index: 10;
    white-space: nowrap;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }

  .stage:hover .stage-popup {
    display: block;
  }

  .stage-popup a {
    display: block;
    text-decoration: none;
    color: #2563eb;
    margin-bottom: 4px;
  }
</style>

<div class="roadmap-container">

  <div class="moving-truck"></div>


  <img src="/assets/images/trc.svg" alt="نقشه راه" class="roadmap-image" />


  <div class="stage-labels">
    <div class="stage">
      پیش‌نیازها
      <div class="stage-popup">
        <a href="/Tokens/#getToken">توکن و فروشگاه</a>
        <a href="/ProvinceAndCitiesList/#getProvinceList">استان‌ها</a>
        <a href="/ProvinceAndCitiesList/#getCitiesList">شهرها</a>
         <a href="/Orders/CreateOrder/#kioskList">کیوسک‌های جابار</a>
        <a href="/Orders/CreateOrder/#packagesList">بسته‌های پستی</a>
         <a href="/Orders/OrderGuide/#pay_type">نوع پرداخت</a>
        <a href="/Orders/OrderGuide/#order_type">نوع سفارش</a>
          <a href="/Orders/OrderGuide/#register_type">نوع ثبت سفارش</a>
            <a href="/Orders/OrderGuide/#content_type">نوع محتوای سفارش</a>
      </div>
    </div>
    <div class="stage">
      استعلام قیمت
      <div class="stage-popup">
        <a href="/PriceCheck/">استعلام قیمت</a>
      </div>
    </div>
    <div class="stage">
      ثبت سفارش
      <div class="stage-popup">
        <a href="/Orders/CreateOrder/#createOrder">ثبت سفارش</a>
      </div>
    </div>
    <div class="stage">
      لیبل و فاکتور
      <div class="stage-popup">
        <a href="/Orders/OrderLable/#orderLable">دریافت لیبل</a>
        <a href="/Orders/OrderLable/#lableWithDate">دریافت فاکتور</a>
      </div>
    </div>
    <div class="stage">
      مدیریت سفارشات
      <div class="stage-popup">
        <a href="/Orders/OrderDetail/#orderList">لیست سفارشات</a>
        <a href="/Orders/OrderDetail/#orderDetails">جزییات سفارش</a>
        <a href="/Orders/OrderStatus/#changeOrderStatus">تغییر وضعیت و حذف سفارش</a>
      </div>
    </div>
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







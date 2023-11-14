function Contacts() {
  return (
    <main class="content">
      <div class="container">
        <div class="content__inner">
          <div class="content__title" data-lang="cont-content-welcome">
            Contacts
          </div>
          <div class="content__descr content--subhead content--subhead-color" data-lang="cont-content-1">
            Mailing address:
          </div>
          <div class="content__descr vidstup" data-lang="cont-content-2">
            Ukraine, 03187, Kiev, prospekt Akademika Glushkova, 40
          </div>
          <div class="content__descr vidstup" data-lang="cont-content-3">
            V.M. Glushkov's Institute of Cybernetics of National Academy od Sciences of Ukraine
          </div>
          <div class="content__descr vidstup" data-lang="cont-content-4">
            Data-acquisition system department
          </div>
          <div class="content__descr content--subhead content--subhead-color" data-lang="cont-content-5">
            Head of Department:
          </div>
          <div class="content__descr vidstup" data-lang="cont-content-6">
            Romanov Volodymyr Oleksandrovych, doctor of sciences, professor
          </div>
          <div class="content__descr content--subhead content--subhead-color" data-lang="cont-content-7">
            Tel./Fax:
          </div>
          <a class="content__descr vidstup content-block" data-lang="cont-content-8" href="tel:+380445263204">
            +38 (044) 526-32-04
          </a>
          <div class="content__descr content--subhead content--subhead-color" data-lang="cont-content-9">
            E-mail:
          </div>
          <a class="content__descr vidstup content-block" data-lang="cont-content-10" href="mailto:VRomanov@i.ua">
            VRomanov@i.ua
          </a>
          <div class="content__descr content--subhead content--subhead-color" data-lang="cont-content-11">
            Map:
          </div>
          <div class="content__descr vidstup">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3599.3694602981027!2d30.444408840760445!3d50.36397088000353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d50.3667556!2d30.4522998!4m5!1s0x40d4c84e026909e5%3A0x3a3d58bf2608051e!2zVk1HbHVzaGtvdiBJbnN0aXR1dGUgb2YgQ3liZXJuZXRpY3Mgb2YgdGhl4oCmINCG0L3RgdGC0LjRgtGD0YIg0LrRltCx0LXRgNC90LXRgtC40LrQuCDRltC80LXQvdGWINCSLtCcLtCT0LvRg9GI0LrQvtCy0LDigKY!3m2!1d50.362383099999995!2d30.4444545!5e0!3m2!1sen!2sua!4v1690536518455!5m2!1sen!2sua"
              width="100%"
              height="500"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contacts;

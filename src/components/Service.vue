
<script>
export default {

}
</script>


<template>
<section id="service"  class="sectionPadding text-white" >
    <div class="mainContent lg:pl-5 -mt-px">
        <div class="folderBg transform skew-x-6 white-line "></div>
        <div class="folderBg transform -skew-x-6 top-1/3 white-line"></div>
        <div class="folderBg  top-2/3 white-line"></div>

        <!--CON-->
        <div class="mainContent lg:mx-2 lg:my-10  items-center">
            <!--01-->
            <div class="serviceWindow white-line">
                <!--TOP-->
                <div class="serviceWindowTop">
                    <div class="icon p-1.5">
                        <span class="dot "></span>
                    </div>
                    <div class="icon ">
                        <span class="close transform rotate-45  right-0  origin-top-right"></span>
                        <span class="close transform -rotate-45 origin-top-left"></span>
                        <span class="close "></span>
                    </div>
                </div>
                <!--/-->
                <div class="flex">
                    <div class="serviceContent">
                        <div class="serviceImg ">
                            <h2>WEBSITE<br>SYSTEM</h2>
                            <img  src="/img/wwdo01.jpg" alt="">
                        </div>
                        <div class="servieUl  ">
                            <h2 >網站與系統建置</h2>
                            <ul >
                             <li>產品形象官網建置</li>
                             <li>品牌企業官網建置</li>
                             <li>購物車網站建置</li>
                             <li>RWD網站建置</li>
                             <li>客製化系統開發</li>
                             <li>UI/UX規劃執行</li>
                            </ul>
                        </div>
                    </div>

                    <div class="serviceWindowRight">
                        <span class="arrow border-b"><img  src="/img/arrow.svg" alt=""></span>
                        <span class="arrow border-t absolute bottom-0"><img class="transform rotate-180"  src="/img/arrow.svg" alt=""></span>
                        <span class="scrollBar"></span>
                    </div>

                </div>
            </div>
            <!--/-->


             <!--03-->
            <div class="serviceWindow white-line" >
                <!--TOP-->
                <div class="serviceWindowTop">
                    <div class="icon p-1.5">
                        <span class="dot "></span>
                    </div>
                    <div class="icon ">
                        <span class="close transform rotate-45  right-0  origin-top-right"></span>
                        <span class="close transform -rotate-45 origin-top-left"></span>
                        <span class="close "></span>
                    </div>
                </div>
                <!--/-->
                <div class="flex">
                    <div class="serviceContent">
                        <div class="serviceImg">
                            <h2>FILM&<br>ANIMATION</h2>
                            <img  src="/img/wwdo03.jpg" alt="">
                        </div>
                        <div class="servieUl">
                            <h2 >動態視覺規劃</h2>
                            <ul >
                              <li>腳本規劃建議</li>
                               <li>影片剪輯</li>
                               <li>Motion動畫製作</li>
                               <li>社群短秒影視</li>
                               <li>短秒動態展演(GIF)</li>
                            </ul>
                        </div>
                    </div>

                     <div class="serviceWindowRight">
                        <span class="arrow border-b"><img  src="/img/arrow.svg" alt=""></span>
                        <span class="arrow border-t absolute bottom-0"><img class="transform rotate-180"  src="/img/arrow.svg" alt=""></span>
                        <span class="scrollBar"></span>
                    </div>

                </div>
            </div>
            <!--/-->



            <!--02-->
            <div class="serviceWindow white-line ">
                <!--TOP-->
                <div class="serviceWindowTop">
                    <div class="icon p-1.5">
                        <span class="dot "></span>
                    </div>
                    <div class="icon ">
                        <span class="close transform rotate-45  right-0  origin-top-right"></span>
                        <span class="close transform -rotate-45 origin-top-left"></span>
                        <span class="close "></span>
                    </div>
                </div>
                <!--/-->
                <div class="flex ">
                    <div class="serviceContent">
                        <div class="serviceImg">
                            <h2>INTERGRATED<br>MARKETING</h2>
                            <img  src="/img/wwdo02.jpg" alt="">
                        </div>
                        <div class="servieUl">
                            <h2 >整合式數位行銷</h2>
                            <ul >
                              <li>行銷策略擬定</li>
                                    <li>KOL網紅/口碑行銷</li>
                                    <li>媒體投放建議</li>
                                    <li>FB/LINE聊天機器人</li>
                                    <li>LINE LIFF 活動頁</li>
                                    <li>數位平台上架規劃/執行</li>
                            </ul>
                        </div>
                    </div>

                     <div class="serviceWindowRight">
                        <span class="arrow border-b"><img  src="/img/arrow.svg" alt=""></span>
                        <span class="arrow border-t absolute bottom-0"><img class="transform rotate-180"  src="/img/arrow.svg" alt=""></span>
                        <span class="scrollBar"></span>
                    </div>

                </div>
            </div>
            <!--/-->
            
        </div>
        <!--/-->


        
    </div>
</section>
</template>




<style lang="postcss" scoped>
.sectionPadding{
    @apply  px-8 md:px-24 ;
}
.mainContent{ 
   @apply  w-full h-full relative block lg:flex justify-center content-center  ;
}

.folderBg{ 
   @apply invisible lg:visible lg:w-full lg:h-1/3 lg:absolute ;
}
.serviceWindow{
    @apply w-full  self-center lg:mx-4 xl:mx-10 my-10 bg-blue-800 max-w-sm sm:max-w-3xl mx-auto;

}
.serviceWindowTop{
    @apply flex justify-between border-b border-white relative;
}
.serviceWindowRight{
    @apply flex-none  border-l border-white w-6 h-auto relative bg-blue-800;
}
.icon{
    @apply w-6 h-6 relative;
}
.dot{
    @apply bg-white rounded-full w-3 h-3 block;
}
.close{
    @apply w-px h-8 bg-white block absolute;
}
.arrow{
    @apply px-0.5 py-2 block border-white;
}
.scrollBar{
    @apply w-8/12 ml-1 h-16  block absolute top-1/3 bg-yellow-500;
  
}
.serviceContent{
    @apply grow w-full bg-white sm:flex lg:block;
}
.serviceImg{
    @apply w-full sm:w-7/12 lg:w-full h-auto min-h-min bg-red-500 relative;
}
.serviceImg h2{
    @apply absolute text-pink-600 text-4xl lg:text-2xl lg:p-2 xl:text-4xl xl:p-4 bottom-0 p-2 font-bold sm:p-6  
}
.servieUl{
    @apply py-4 px-3 text-gray-800 text-sm sm:w-5/12 lg:w-full sm:self-center sm:p-5;
}
.servieUl h2{
    @apply text-blue-900 font-bold text-2xl pb-2 ;
}
.servieUl li{
    @apply py-0.5;
}
</style>

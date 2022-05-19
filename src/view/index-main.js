import {renderFunc} from './units/render';

const link = '<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/index.css\">';
const content = `<div class="main">
            <div class="new-block">
                <div class="head">
                    <h1>Новость 1</h1>
                </div>
                <img src="https://us.123rf.com/450wm/alhovik/alhovik1709/alhovik170900031/86481591-nouvelles-nouvelles-world-global-tv-news-design-de-banni%C3%A8re.jpg" alt="">
                <div class="text-block">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, modi maiores
                        harum repellat sit voluptatibus iusto cumque quae aut doloribus sint ex deserunt
                        est culpa, ipsam quisquam tempore nostrum. Et quod distinctio dolore magnam ab,
                        molestias commodi architecto, dicta accusamus repellat hic ducimus cum cupiditate,
                        laboriosam vitae culpa quaerat eveniet?</p>
                </div>
                <a href="">Читать новость</a>
            </div>
            <div class="new-block">
                <div class="head">
                    <h1>Новость 2</h1>
                </div>
                <div class="text-block">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, modi maiores
                        harum repellat sit voluptatibus iusto cumque quae aut doloribus sint ex deserunt
                        est culpa, ipsam quisquam tempore nostrum. Et quod distinctio dolore magnam ab,
                        molestias commodi architecto, dicta accusamus repellat hic ducimus cum cupiditate,
                        laboriosam vitae culpa quaerat eveniet?</p>
                </div>
                <a href="">Читать новость</a>
            </div>
        </div>
        </div>`;


export const renderMain=()=>{
  renderFunc(content,link);};

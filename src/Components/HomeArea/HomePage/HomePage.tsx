
import Logo from "../../LayoutArea/Logo/Logo";
import "./HomePage.css";
function HomePage(): JSX.Element {
    return (
        <div className="HomePage">
        {/* <header>
       <div  className="C Box">
         <h1>SWALLOWING IMPAIRMENT PICTORIAL SURVEY</h1>
        <br/>
        <h1>  שאלון חזותי לאיתור הפרעות בליעה</h1> 
       </div>
       <Logo/>
        </header>  */}
        <main>
<div className="B">
<p className="P2 Box">
On this website you can find a survey to detect swallowing difficulties.
The survey contains 10 items.
Each item displays two images that represent experiences related to your ability to swallow.
Choose the image that applies to you.
</p>
</div>      
		<div className="A"  >
            <p className="p1 Box ">
            באתר זה ניתן למצוא שאלון לאיתור הפרעות בליעה. 
השאלון מכיל 10 שאלות. 
בכל שאלה מוצגות שתי תמונות המייצגות חוויה שקשורה ליכולת הבליעה שלך. 
יש לבחור בתמונה הנכונה עבורך 

           </p>
        </div>
</main>
	 
</div>

    );
}

export default HomePage;

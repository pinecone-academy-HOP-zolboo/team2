import "./Post.css";
import Ellipse from "../../assest/Ellipse.svg"
import Rectangle from "../../assest/Rectangle.svg"
import Ellipse2 from "../../assest/Ellipse2.svg"
function Post() {
  return (
  <div className="main">
    <div className="container">
      <div className="upperSection">
         <div>
              <div className="title">10 Secrets for managing a remote team</div>
              <div className="profileSection">
                  <img className="profile" src={Ellipse}></img>
                  <div className="profileSection1">
                      <div className="he">Shedrack eze</div>
                      <div className="he">2nd January,2022</div>
                  </div>
              </div> 
          </div>


          <img src={Rectangle}></img>


          <div className="middle">
            <div className="bigOne">If you’re thinking of starting a blog of your own, but just don’t have a clue on what to blog about, then fear not!
                In this article, I have included a whole load of blog examples from a wide variety of different niches, all run on different blogging platforms like WordPress, Joomla! and Drupal.
                Since the beginning of the internet, millions and millions and millions of blogs have been created. Many have died due to lost interest or their owners giving up on the idea, while others have thrived and continue to grow, making money and earning their owners a steady income. It’s a constant evolution of content that keeps people coming back for more, especially if these blogs contact highly resourceful material that people find useful and interesting.
                Each example listed in this blog post are all different in some way and all bring something unique to their readers & subscribers. I want to show you what is possible and how you can take inspiration from them and create an awesome blog of your own.
                Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.
                Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and 
                Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.
                Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.
            </div>

            <div className="lowerProfile">
              <img src={Ellipse}></img>
              <div>
                <div>
                  <div className="writtenBy">Written by</div>
                  <div className="Shedrack">Shedrack Eze</div>
                </div>
                <div className="Ceo">CEO Team App</div>
              </div>
            </div>

          </div>

      </div>
      
      <br></br>
        <hr className="hr"></hr>
        <br></br>

      <div className="lowerSection">
        <div className="join">Join the conversation</div>
        <div>
          <img src={Ellipse2}></img>
          <input className="input" placeHolder="comment"></input>
        </div>
      </div>


    </div>
  </div>
  )
}

export default Post;
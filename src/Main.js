import React, {useState} from 'react';

const mainTitle = "GUI TRANSLATOR";

const Main = () => {
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");

  const showMainTitle = (title) => {
    return(
      <section className="jumbotron text-center mt-4">
        <div className="container">
          <h1 className="jumbotron-heading">
            {title}
          </h1>
        </div>
      </section>
    );
  };

  const handleChange = (inputName) => (event) => {
    let value = event.target.value;

    if (inputName === 'text') {
      setText(value);
    } else if (inputName === 'translation') {
      setTranslation(value);
    } 
  };

  const breakParagraph = (paragraph) => {
    let phrases = paragraph.split(/(?<=[.?!;])/);

    return phrases;
  }

  const showBrokenText = (paragraph) => {
    let phrases = breakParagraph(paragraph);
    
    const colorText = (index) => {
      const colors = ['red', 'green', 'blue'];

      if (index % 2) return colors[1];
      if (index % 3) return colors[2];
      
      return colors[0];
    };

    if (phrases == "") phrases = [];

    return(
      <span>
        {phrases.length > 0 && phrases.map((line, index) => (
            <p id={index} style={{color: colorText(index), margin: 0}}>
              <small className="text-muted">
                {index + 1}
              </small>
              <span>   </span>
              {line} 
            </p>
          )
        )}
      </span>
    );
  };

  return(
    <div className="container col-12">
      {showMainTitle(mainTitle)}
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <textarea
                value={text}
                onChange={handleChange('text')}
                className="form-control">
              </textarea>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <textarea
                value={translation}
                onChange={handleChange('translation')}
                className="form-control">
              </textarea>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <span>
                {showBrokenText(text)}
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <span>
                {showBrokenText(translation)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
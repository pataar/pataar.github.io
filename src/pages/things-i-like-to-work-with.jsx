import { graphql } from "gatsby";
import DefaultLayout from "../components/DefaultLayout";
import Skill from "../components/Skill";
import WebpackIcon from "../components/icons/webpack";
import MysqlIcon from "../components/icons/mysql";
import TypescriptIcon from "../components/icons/typescript";

const ThingsILikeToWorkWith = () => (
  <DefaultLayout>
    <div className="content-box clearfix">
      <div className="tiltww">
        <h1>Things I like to work with</h1>
        <p>
          While I code I like to use a combination of several languages and frameworks. These items are the ones that I
          use the most at the moment. Ordered by preference.
        </p>
        <div className="skills-wrapper">
          <div className="skills">
            <div className="category">
              <div className="category-name">
                <span>Languages</span>
              </div>
              <Skill label="TypeScript" iconRaw={<TypescriptIcon />} url="https://www.typescriptlang.org/" />
              <Skill label="JavaScript (ES6+)" icon="js" />
              <Skill label="NodeJS" icon="node-js" url="https://nodejs.org/" />
              <Skill label="PHP" icon="php" url="" />
              <Skill label="SQL" iconRaw={<MysqlIcon />} />
              <Skill label="Sass" icon="sass" />
              <Skill label="Go" icon="golang" />
            </div>
            <div className="category">
              <div className="category-name">
                <span>Frameworks & libraries</span>
              </div>
              <Skill label="React" icon="react" url="https://reactjs.org/" />
              <Skill label="Laravel" icon="laravel" url="https://laravel.com/" />
              <Skill label="Vue" icon="vuejs" url="https://vuejs.org/" />
              <Skill label="Angular" icon="angular" url="https://angular.io/" />
            </div>
            <div className="category">
              <div className="category-name">
                <span>Tools</span>
              </div>
              <Skill label="Git" icon="git" url="https://git-scm.com/" />
              <Skill label="Webpack" iconRaw={<WebpackIcon />} url="https://webpack.js.org/" />
            </div>
            <br />
            <div className="category">
              <div className="category-name">
                <span>Operating Systems</span>
              </div>
              <Skill label="Debian" icon="debian" />
              <Skill label="Ubuntu" icon="ubuntu" />
              <Skill label="MacOS" icon="apple" />
            </div>
            <div className="category">
              <div className="category-name">
                <span>DevOps</span>
              </div>
              <Skill label="Docker" icon="docker" />
              <Skill label="Github (actions)" icon="github" url="https://github.com/" />
              <Skill label="Gitlab (CI)" icon="gitlab" url="https://gitlab.com/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
);

export default ThingsILikeToWorkWith;
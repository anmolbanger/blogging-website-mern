import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Badge,
} from "reactstrap";
import { Link } from "react-router-dom";
import "../style/profile.css";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="profile_pic">
          <img
            src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
            alt="profilepic"
            id="user_profile_pic"
          />
        </div>
        <div className="user_name">
          <span>Anshuman Sharma</span>
        </div>
        <hr />
        <div className="user_blogs">
          <div className="particular_blog">
            <Card>
              <CardBody>
                <CardTitle className="mini_blog_username">
                  Anshuman sharma{" "}
                  <Badge color="success" className="mini_blog_category_badge">
                    Travel
                  </Badge>
                </CardTitle>

                <p className="mini_blog_date">23 july</p>
              </CardBody>
              <Link to="detail">
                <CardImg
                  id="mini_blog_image"
                  width="100%"
                  src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle className="mini_blog_title">
                    How to delete instagram account permanentaly
                  </CardTitle>

                  <CardText className="mini_blog_description">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Link>
            </Card>
          </div>
          <div className="particular_blog">
            <Card>
              <CardBody>
                <CardTitle className="mini_blog_username">
                  Anshuman sharma{" "}
                  <Badge color="success" className="mini_blog_category_badge">
                    Travel
                  </Badge>
                </CardTitle>

                <p className="mini_blog_date">23 july</p>
              </CardBody>
              <Link to="detail">
                <CardImg
                  id="mini_blog_image"
                  width="100%"
                  src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle className="mini_blog_title">
                    How to delete instagram account permanentaly
                  </CardTitle>

                  <CardText className="mini_blog_description">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

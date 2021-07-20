import Card from "@material-ui/core/Card";
import { useEffect, useState } from "react";
import CardHeader from "@material-ui/core/CardHeader";

import Avatar from "@material-ui/core/Avatar";

export default function NewsFeed() {
  const [NewsFeed, setNewsFeed] = useState([]);
  useEffect(() => {
    console.log("user is mounted");
    fetch("https://60b9978680400f00177b69b2.mockapi.io/users", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((res) => setNewsFeed(res));
  }, []);
  return (
    <div>
      {NewsFeed.map((user) => (
        <Card>
          <CardHeader
            avatar={<Avatar alt="profile Pic" src={user.image} />}
            title={user.name}
            subheader={user.emailid}
          />
         </Card>
      ))}
    </div>
  );
}

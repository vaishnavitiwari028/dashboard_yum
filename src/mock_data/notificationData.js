import { avatar1Img, avatar2Img, avatar3Img, avatar4Img, avatar5Img } from "../assets/images/images";
import { subtractHours } from "../utils";

export const notificationsData = [
    {
      id: 1,
      name: "Datacorp",
      avatar: avatar1Img,
      subText: "Caleb Flakelar commented on Admin",
      createdAt: subtractHours(new Date(), 1),
    },
    {
      id: 2,
      name: "Admin",
      avatar: avatar2Img,
      subText: "New user registered",
      createdAt: subtractHours(new Date(), 60),
    },
    {
      id: 3,
      name: "Cristina Pride",
      subText: "Hi, How are you? What about our next meeting",
      avatar: avatar3Img,
      createdAt: subtractHours(new Date(), 120),
    },
    {
      id: 4,
      name: "Datacorp",
      avatar: avatar4Img,
      subText: "Caleb Flakelar commented on Admin",
      createdAt: subtractHours(new Date(), 1440),
    },
    {
      id: 5,
      name: "Karen Robinson",
      subText: "Wow ! this admin looks good and awesome design",
      avatar: avatar5Img,
      createdAt: subtractHours(new Date(), 1820),
    },
  ];
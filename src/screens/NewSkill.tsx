import React from "react";
import NewSkill from "../components/create/NewSkill";
import ScreenModule from "../modules/ScreenModule";

const NewSkillScreen = () => {
  return (
    <ScreenModule statusBgColor="#ffffff" barStyle="dark" headerShown>
      <NewSkill />
    </ScreenModule>
  );
};

export default NewSkillScreen;

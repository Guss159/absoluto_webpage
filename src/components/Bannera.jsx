import style from "./Banner.module.css";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className={style.Started}>
      <div className={style.background}>
        <div className={style.Started_text}>
          <p className={style.title}>{t("banner.title")}</p>
          <div className="div_bar"></div>
          <p>{t("banner.text")}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

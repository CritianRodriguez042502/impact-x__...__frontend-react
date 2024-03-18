import { BeatLoader } from "react-spinners";
import styles from "./style_loader.module.css";

export const Loader = () => {
  return (
    <aside title="loader" className={styles.container}>
      <BeatLoader size={25} color="#CCCCCC" />
    </aside>
  );
};

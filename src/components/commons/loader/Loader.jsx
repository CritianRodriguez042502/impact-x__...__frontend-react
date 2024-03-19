import { ScaleLoader } from "react-spinners";
import styles from "./style_loader.module.css";

export const Loader = () => {
  return (
    <aside title="loader" className={styles.container}>
      <ScaleLoader width={9} height={100} color="#333333" />
    </aside>
  );
};

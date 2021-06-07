import { getLogger } from "log4js";
import { logger } from "./logger";

class Demo {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  public hello() {
    console.log(this.message);
  }
}

const demo = new Demo('hello world');
demo.hello();


logger.trace("stackjava.com");
logger.debug("stackjava.com");
logger.info("stackjava.com");
logger.warn("stackjava.com");
logger.error("stackjava.com");
logger.fatal("stackjava.com");

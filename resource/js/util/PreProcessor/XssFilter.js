import Xss from '../../../../lib/util/xss';
import xssOption from '../../../../lib/util/xssOption';

export default class XssFilter {

  constructor(crowi) {
    this.crowi = crowi;

    if (crowi.config.isEnabledXssPrevention) {
      this.xssOption = new xssOption(crowi.config);
      this.xss = new Xss(this.xssOption);
    }
  }

  process(markdown) {
    if (this.crowi.config.isEnabledXssPrevention) {
      return this.xss.process(markdown);
    }
    else {
      return markdown;
    }
  }

}

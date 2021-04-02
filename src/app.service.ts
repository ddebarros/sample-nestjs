import { Injectable } from '@nestjs/common';
import { loremIpsum } from "lorem-ipsum";

@Injectable()
export class AppService {
  getRandomText(): string {
    return loremIpsum({
      count: 30,                // Number of "words", "sentences", or "paragraphs"
      format: "plain",         // "plain" or "html"
      paragraphLowerBound: 3,  // Min. number of sentences per paragraph.
      paragraphUpperBound: 7,  // Max. number of sentences per paragarph.
      sentenceLowerBound: 5,   // Min. number of words per sentence.
      sentenceUpperBound: 15,  // Max. number of words per sentence.
      suffix: "\n",            // Line ending, defaults to "\n" or "\r\n" (win32)
      units: "sentences",      // paragraph(s), "sentence(s)", or "word(s)"
    })
  }
}

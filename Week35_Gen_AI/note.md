# Overview of AI project End to End Pipeline

### Generative Ai Pipeline


1. Data Acquisition
2. Data Prepartion
3. Feature Engineering
4. Modeling
5. Evaluation
6. Deployment
7. Monitoring and model updating


### Data Acquisition

1. Available Data (csv, txt, pdf, docs, xlsx)
2. Other data (Db, internet, web scrapping, API)
3. No data (Create own data) -> using LLM

> If you have less data then you can perform **Data Augmentation**

1. Replace with Synnomys
  - I am a data Scientist
  - I am an AI engineer
  > Similar for Image augumentation

2. Bigram Flip
  - I am Buppy
  - Buppy is my name

3. Back Translate
  - translate original text into diff languages then translate back to original language.

4. Adding of Additional Noise
  - I am Data Scientist, And I love this job.

### Data Preprocessing

1. Cleanup:
  - Remove html tag, emoji, spelling correction

2. Basic Preprocessing
  - Tokenization (Types)
    1. Sentence level
    2. Word level

3. Advance Preprocessing (eg: Understanding Emoji meaning by chatGPT)

4. Optional Preproccesing
  - Stop word removal
  - Stemming - less used now days
  - Lemmatization - more used 
  - Punctuation removal
  - Lower case
  - Language detection

#### Tokenization

Converting string into coordinates

eg:
##### Word level Tokenization (Mostly used)
My name is Buppy => ["My", "name", "is", "Bubby"]

##### Sentence level Tokenization
My name is Buppy. I am data Scientist
=> ["My name is Bubby", "I am data Schientist"]


#### Stemming

eg: play, played, playing => play

> Stemming reduces an inflected word to its word stem by removing the last few characters. For example, the words "programming," "programmer," and "programs" would all be stemmed to the word "program


#### Lemmatization

> Lemmatization breaks down a word into its lemma, or base form, by removing inflectional endings. For example, the words "walking," "walks," and "walked" would all be lemmatized to the word "walk".


##### Diff bw stemming vs Lemmatization

1. Accuracy

> Lemmatization is more accurate than stemming because it considers the context and part of speech of a word. 

2. Speed

> Stemming is faster than lemmatization because it uses fixed rules and string manipulation. 

3. Output

> Stemming can produce words that are not valid in the language, while lemmatization yields actual words. 

4. Use cases

> Stemming is useful for search engines, information retrieval, and text mining. Lemmatization is essential for chatbots, text classification, and semantic analysis.


#### Lower case

> Bubby vs bubby is diff as their ASCII code is diff.
> So word converted to lower case.

#### Advance Preprocessing

1. Parts of Speech tagging

2. Parsing

3. Co-reference resolution

!(Advance Preprocessing)[./Images/AdvancePreprocessing.png]

### Feature Engineering

- Text or Image to vector representation

> Text Vectorization
- TFIDF
- Bag of word
- word2vec
- one encoding
- Transformers model


### Modeling

> Train Model using above pipeline

1. Open source
2. Paid Model

### Model Evaluation

1. Intrinsic Metric perform by Gen AI Engineer
2. Extrinsic Metric

### Deployment And Monitoring

### Common Jargon

1. Corpus (Entire text)
2. Vocabulary (unique Word)
3. Document (one line or one token)
4. Word (single word)


# Data preprocessing

1. Text Preprocessing

> https://github.com/entbappy/Generative-AI-Mastery-Resources/blob/main/Data%20Preprocessing%20and%20Embeddings/Text-Preprocessing.ipynb




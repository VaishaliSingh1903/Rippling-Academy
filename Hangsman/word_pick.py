import requests
import random


class Word_Picker:
    
    def __init__(self) -> None:
        word_site = "https://www.mit.edu/~ecprice/wordlist.10000"
        response = requests.get(word_site)
        words = response.content.splitlines()
        self.word = random.choice(words)

    def get_next_word(self) -> str:
        return self.word



    

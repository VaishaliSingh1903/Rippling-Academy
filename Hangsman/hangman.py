class Hangman:

    def __init__(self, word="Word"):
        self.word = word.upper()
        self._guess_count = 6
        self. guessed_letters = []
        self.display = ["_" for alphabet in self.word]


    def get_guess_count(self):
        return self._guess_count


    def show(self):
        shown_word = " ".join(self.display)
        print(f"Word is {shown_word}")


    def get_letter_index(self, alpahabet_guessed: str) -> list:
        index_alphabet = []
        
        for index, alphabet in enumerate(list(self.word)):
            if alphabet == alpahabet_guessed:
                index_alphabet.append(index)

        return index_alphabet


    def update_word(self,location: list, letter: str):
        for index in location:
            # print(self.word)
            self.display[index] = letter


    def is_already_guessed(self,letter: str) -> bool:
        if letter not in self.guessed_letters:
                self.guessed_letters.append(letter)
                return False
        return True


    def check_guess(self, alpahabet_guessed: str):
        if alpahabet_guessed in self.word:
            if (not self.is_already_guessed(alpahabet_guessed)):
                alphabet_index = self.get_letter_index(alpahabet_guessed)
                self.update_word(alphabet_index,alpahabet_guessed)
            self.show()
        else:
            if (not self.is_already_guessed(alpahabet_guessed)):
                self._guess_count -= 1
            print("Incorrect guess")

    
    def check_win_condition(self) -> bool:
        display = "".join(self.display)
        if display == self.word:
            return True
        
        return False

    



    





        

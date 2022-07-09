from hangman import Hangman
from word_pick import Word_Picker

def start():
    choose_word = Word_Picker()

    next_word = choose_word.get_next_word()
    word = Hangman(next_word.decode())
    word.show()
   
    while True:
        letter = input("\nEnter a letter: ")
        word.check_guess(letter.upper())
        
        if(word.check_win_condition()):
            print(f"Congrulation! You Won\n")
            break

        if(word.get_guess_count() == 0):
            print("You have reached the total guess count. Sorry! Better luck next time\n")
            print(f"Correct word was {word.word}")
            break


if __name__ == "__main__":
    while True:
        choice = input("Press 'S' to start and E to exit the game:")
        if(choice.upper() == 'S'):
            start()
        else:
            exit()      








    



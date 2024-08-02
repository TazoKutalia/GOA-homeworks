import random

class Player:
    def __init__(self, name):
        self.name = name
        self.health = 100
        self.attack = 10
        self.defense = 5
        self.level = 1
        self.xp = 0
        self.next_level_xp = 50

    def __str__(self):
        return f"{self.name} (Level {self.level}) - Health: {self.health}, Attack: {self.attack}, Defense: {self.defense}, XP: {self.xp}/{self.next_level_xp}"

    def level_up(self):
        self.level += 1
        self.health += 20
        self.attack += 5
        self.defense += 2
        self.xp = 0
        self.next_level_xp *= 2
        print(f"Congratulations! You leveled up to Level {self.level}.")

    def take_damage(self, damage):
        damage_taken = damage - self.defense
        if damage_taken > 0:
            self.health -= damage_taken
            if self.health <= 0:
                print(f"{self.name} has been defeated!")
                return False
            else:
                print(f"{self.name} takes {damage_taken} damage.")
                print(f"{self.name}'s health is now {self.health}.")
                return True
        else:
            print(f"{self.name} defends the attack!")
            return True

class Enemy:
    def __init__(self, name, health, attack):
        self.name = name
        self.health = health
        self.attack = attack

    def take_damage(self, damage):
        self.health -= damage
        if self.health <= 0:
            print(f"{self.name} has been defeated!")
            return False
        else:
            print(f"{self.name} takes {damage} damage.")
            print(f"{self.name}'s health is now {self.health}.")
            return True

def main():
    print("Welcome to the Battle Arena!")
    player_name = input("Enter your name: ")
    player = Player(player_name)
    print(f"Welcome, {player.name}!")

    enemies = [
        Enemy("Goblin", 30, 5),
        Enemy("Orc", 50, 10),
        Enemy("Dragon", 100, 20)
    ]

    while True:
        print("\n" + "-"*20)
        print(player)
        print("-"*20 + "\n")

        print("Choose an action:")
        print("1. Fight an enemy")
        print("2. Exit game")

        choice = input("Enter your choice: ")

        if choice == '1':
            enemy = random.choice(enemies)
            print(f"A wild {enemy.name} appears!")

            while player.health > 0 and enemy.health > 0:
                print("\n" + "-"*20)
                print(f"{player.name}: Health = {player.health}")
                print(f"{enemy.name}: Health = {enemy.health}")
                print("-"*20 + "\n")

                print("Choose an action:")
                print("1. Attack")
                print("2. Defend")
                print("3. Run")

                action = input("Enter your action: ")

                if action == '1':  # Attack
                    damage = random.randint(1, player.attack + 5)
                    if enemy.take_damage(damage):
                        print(f"You attack the {enemy.name} and deal {damage} damage!")
                        if not enemy.take_damage(damage):
                            player.xp += 20
                            if player.xp >= player.next_level_xp:
                                player.level_up()
                                break
                        else:
                            damage = random.randint(1, enemy.attack)
                            player.take_damage(damage)

                elif action == '2':  # Defend
                    print(f"{player.name} defends against the {enemy.name}'s attack.")
                    damage = random.randint(1, enemy.attack)
                    if player.take_damage(damage):
                        damage = random.randint(1, player.attack + 5)
                        player.take_damage(damage)

                elif action == '3':  # Run
                    print(f"{player.name} tries to run away!")
                    break

        elif choice == '2':
            print("Exiting the game.")
            break

        else:
            print("Invalid choice. Please enter '1' or '2'.")

if __name__ == "__main__":
    main()

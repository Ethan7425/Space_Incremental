function upgradeGenerator()
{
    if (20 > money) return
    generators[0].multiplier *= 1.5;
    money -= 20
    updateGUI();
}
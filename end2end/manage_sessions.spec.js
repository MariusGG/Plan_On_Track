describe('first test', () => {
  beforeEach(() => {
    await device.reloadReactNative();
  });

  it('should let you allow you to create a session', async() => {
    const sessionName = "Workout Wednesday"

    await element(by.id('newSessionsButton')).tap();
    await element(by.id('sessionsTextField')).typeText("workout");
    await element(by.id('saveSessionsButton')).tap("workout");

    await expect(element(by.label(sessionName))).toBeVisible();
    await expect(element(by.id('sessionsTextField'))).toBeNotVisible();
  })
})

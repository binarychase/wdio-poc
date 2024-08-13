describe('Sample Android App Test', () => {
    it('should open the app and display a welcome message', async () => {
        const el = await $('//android.widget.TextView[@text="Welcome!"]');
        await expect(el).toHaveText('Welcome!');
        // await new Promise(resolve => setTimeout(resolve, 600000));
    });
});
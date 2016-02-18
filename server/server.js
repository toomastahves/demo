import app from './express/app';

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Started at ${port}`);
});

// import w from './watson/visual_recognition';
// w();

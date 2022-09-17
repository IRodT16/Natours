/* eslint-disable prettier/prettier */
const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get tour data from collection
  const tours = await Tour.find();

  // 2) BUild template
  // 3) Render that template using tour data from 1)

  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });
});

exports.getTour = async (req, res) => {
  // 1) get the data, for the requested tour (need reviews and guides also)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  // 2) Build Template

  // 3) Render template using data from step 1

  res.status(200).render('tour', {
    title: 'The Forest Hiker Tour',
    tour,
  });
};
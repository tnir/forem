/* eslint-env node */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    Onboarding: './app/javascript/packs/Onboarding.jsx',
    Search: './app/javascript/packs/Search.jsx',
    actionsPanel: './app/javascript/packs/actionsPanel.js',
    admin: './app/javascript/packs/admin.js',
    analyticsArticle: './app/javascript/packs/analyticsArticle.js',
    analyticsDashboard: './app/javascript/packs/analyticsDashboard.js',
    applyApplicationPolicyToggles:
      './app/javascript/packs/applyApplicationPolicyToggles.js',
    articleForm: './app/javascript/packs/articleForm.jsx',
    articleModerationTools: './app/javascript/packs/articleModerationTools.js',
    articlePage: './app/javascript/packs/articlePage.jsx',
    base: './app/javascript/packs/base.jsx',
    commentDropdowns: './app/javascript/packs/commentDropdowns.js',
    commentModPage: './app/javascript/packs/commentModPage.js',
    commentsDisplay: './app/javascript/packs/commentsDisplay.js',
    confirmationEmail: './app/javascript/packs/confirmationEmail.js',
    contentDisplayPolicy: './app/javascript/packs/contentDisplayPolicy.js',
    dashboardDropdowns: './app/javascript/packs/dashboardDropdowns.js',
    dashboardTagsDisableUnchangedButtons:
      './app/javascript/packs/dashboardTagsDisableUnchangedButtons.js',
    enhanceColorPickers: './app/javascript/packs/enhanceColorPickers.jsx',
    feedPreviewCards: './app/javascript/packs/feedPreviewCards.jsx',
    flagUserModal: './app/javascript/packs/flagUserModal.jsx',
    followButtons: './app/javascript/packs/followButtons.js',
    foremCreatorSignup: './app/javascript/packs/foremCreatorSignup.js',
    fullScreenModeControl: './app/javascript/packs/fullScreenModeControl.js',
    githubRepos: './app/javascript/packs/githubRepos.jsx',
    homePage: './app/javascript/packs/homePage.jsx',
    homePageFeed: './app/javascript/packs/homePageFeed.jsx',
    homePageFeedShortcuts: './app/javascript/packs/homePageFeedShortcuts.jsx',
    listingDashboard: './app/javascript/packs/listingDashboard.jsx',
    listingForm: './app/javascript/packs/listingForm.jsx',
    listings: './app/javascript/packs/listings.jsx',
    modCenter: './app/javascript/packs/modCenter.jsx',
    notificationPage: './app/javascript/packs/notificationPage.js',
    notificationSubscriptionHandler:
      './app/javascript/packs/notificationSubscriptionHandler.js',
    onboardingRedirectCheck:
      './app/javascript/packs/onboardingRedirectCheck.jsx',
    orgCreditsSelector: './app/javascript/packs/orgCreditsSelector.js',
    postCommentsPage: './app/javascript/packs/postCommentsPage.js',
    profileDropdown: './app/javascript/packs/profileDropdown.js',
    readingList: './app/javascript/packs/readingList.jsx',
    responseTemplates: './app/javascript/packs/responseTemplates.js',
    runtimeBanner: './app/javascript/packs/runtimeBanner.jsx',
    searchParams: './app/javascript/packs/searchParams.js',
    sidebarWidget: './app/javascript/packs/sidebarWidget.jsx',
    signupModalShortcuts: './app/javascript/packs/signupModalShortcuts.jsx',
    stickySaveFooter: './app/javascript/packs/stickySaveFooter.js',
    storiesList: './app/javascript/packs/storiesList.js',
    userProfileSettings: './app/javascript/packs/userProfileSettings.js',
    validateFileInputs: './app/javascript/packs/validateFileInputs.js',
    webShare: './app/javascript/packs/webShare.js',
    /*
    admin/config/smtp: 'app/javascript/packs/admin/config/smtp.js',
    admin/creatorOnboarding: 'app/javascript/packs/admin/creatorOnboarding.jsx',
    admin/editUser: 'app/javascript/packs/admin/editUser.jsx',
    admin/flashMessages: 'app/javascript/packs/admin/flashMessages.js',
    admin/overview: 'app/javascript/packs/admin/overview.jsx',
    admin/users/controls: 'app/javascript/packs/admin/users/controls.js',
    admin/users/memberIndex: 'app/javascript/packs/admin/users/memberIndex.js',
     */
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    path: path.resolve(__dirname, '..', '..', 'app/assets/builds'),
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  resolve: {
    alias: {
      '@crayons': path.resolve(__dirname, '../../app/javascript/crayons'),
      '@utilities': path.resolve(__dirname, '../../app/javascript/utilities'),
      '@images': path.resolve(__dirname, '../../app/assets/images'),
      '@admin': path.resolve(__dirname, '../../app/javascript/admin'),
      '@components': path.resolve(
        __dirname,
        '../../app/javascript/shared/components',
      ),
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '..', '..', 'app/javascript'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};

(function ($) {
  'use strict';

  $(document).ready(function() {
    $('#draggable-grid').ltGrid({
      params: {
        lg: {
          gap: 1,
          maxWidth: Number.MAX_VALUE,
          cols: 12,
          aspect: 2 / 3
        },
        md: {
          gap: 2,
          maxWidth: 1200,
          cols: 3,
          aspect: 2 / 3
        },
        sm: {
          gap: 3,
          maxWidth: 992,
          cols: 2,
          aspect: 2 / 3
        },
        xs: {
          gap: 4,
          maxWidth: 768,
          cols: 1,
          aspect: 2 / 3
        }
      }
    });
  });
})(jQuery);

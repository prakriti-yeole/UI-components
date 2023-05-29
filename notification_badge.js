import * as React from 'react';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import MailIcon from '@mui/icons-material/Mail';
function notificationsLabel(count) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}
export default function BadgeVariants() {
  return (
    <Box>

      <IconButton color="neutral" aria-label={notificationsLabel(100)}>
        <Badge badgeContent={100} badgeInset="-20%" max={99} variant="soft" size="md">
          <MailIcon />
        </Badge>
      </IconButton>


    </Box>
  );
}

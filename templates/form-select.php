<div class="form-element">
    <label for="<?php echo $field_id; ?>"><?php echo $field_label; ?></label>

    <select class="form-select" name="<?php echo $field_name; ?>" <?php echo $field_readonly; ?>>
        <option selected><?php echo $field_placeholder; ?></option>
        <?php foreach ($options as $key => $option) { ?>
            <option value="<?php echo $key; ?>"><?php echo $option; ?></option>
        <?php } ?>

    </select>

</div>
